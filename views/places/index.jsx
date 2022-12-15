const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>'Cat'</h2>
          <img src='http://placekitten.com/250/250' alt='Cat'/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }

module.exports = index