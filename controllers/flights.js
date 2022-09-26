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

export {
  index,
  newFlight as new,
}