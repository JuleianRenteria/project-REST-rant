const router = require('express').Router()

router.post('/', (req, res) => {
  console.log(req.body)
  router.post('/', (req, res) => {
    
  })
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/public/images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/public/images/beatris-m-5RsnvSk1-0U-unsplash.jpg/250/250'
  }]
  res.render('places/index', {places})
 }) 
 router.get('/new', (req, res) => {
  res.render('places/new')   
 })
module.exports = router
