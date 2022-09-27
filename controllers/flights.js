import { Flight } from "../models/flight.js"

function index(req,res){
  Flight.find({})
  .then( flights =>{
    res.render('flights/index',{
      title:"Flights",
      flights:flights
    })
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/')
  })
}

function newFlight(req, res){
  res.render('flights/new',{
    title:"New Flight"
  })
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/flights/new')
  })
}

function deleteFlight(req,res){
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete
}