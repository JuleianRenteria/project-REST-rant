const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src ="/images/jae-bano-Xbf_4e7YDII-unsplash.jpg" alt ="Ocean View"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@jae462">jae bano</a> on <a href="https://unsplash.com/photos/Xbf_4e7YDII">Unsplash</a>
                    </div>               
                </div>
                <a href='/places'/>
                    <button className='btn-primary'>Places Page</button>
            </main>
        </Def>
    )
}

module.exports = home