const router = require('express').Router()

router.get('/', (req, res) => {
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
  res.render('places/index', { places })      
 })
module.exports = router
