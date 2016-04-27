var express = require('express')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var port = process.env.PORT || 5000
var app = express()
var router = express.Router()

mongoose.connect(process.env.MONGODB_URL)

var incidentSchema = new Schema({
  incident_no: {type: Number},
  recieved_at: {type: Date},
  lastupdated_at: {type: Date},
  status: {type: String},
  location: {
    city: {type: String},
    formatted_address: {type: String},
    provided_address: {type: String},
    street: {type: String},
    street_number: {type: String},
    longitude: {type: Number},
    latitude: {type: Number},
  },
  tactical_channel: {type: String},
  type: {type: String},
  type_code: {type: String},
  units: [
    {
      apparatus: {type: String},
      status: {type: String},
      at_hospital_at: {type: Date},
      cleared_at: {type: Date},
      dispatched_at: {type: Date},
      enroute_to_hospital_at: {type: Date},
      in_command_at: {type: Date},
      onscene_at: {type: Date},
      responding_at: {type: Date},
      with_patient_at: {type: Date},
    }
  ]
})

var Incident = mongoose.model('Incident', incidentSchema)

router.get('/v1/incidents/', function (req, res) {
  Incident.find({status: 'Active'}, function (err, incidents) {
    if (err) {
      res.status(500)
      res.setHeader('Content-Type', 'application/vnd.error+json')
      res.json({message: 'Failed to fetch incidents'})
    } else {
      res.status(200)
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(incidents))
    }
  })
})

router.get('/v1/incidents/:incident_no', function (req, res) {
  Incident.find({incident_no: req.params.incident_no}, function (err, incidents) {
    if (err) {
      res.status(500)
      res.setHeader('Content-Type', 'application/vnd.error+json')
      res.json({message: 'Failed to fetch incident'})
    } else {
      res.status(200)
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(incidents))
    }
  })
})

app.use('/', router)
app.listen(port)
