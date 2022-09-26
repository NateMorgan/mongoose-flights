import { Flight } from "../models/flight.js"

function index(req,res){
  Flight.find({})
  .then( flight =>{
    res.render('flights/index.ejs',{
      title:"Flights"
    })
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/')
  })
}

export {
  index
}