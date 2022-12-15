const React = require('react')
const Def = require ('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Opps, sorry, we can't find this page!</p>
                <div>
                    <img src ="/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg" alt ="Dog looking back at you"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@karsten116">Karsten Winegeart</a> on <a href="https://unsplash.com/s/photos/animals">Unsplash</a>
                    </div>               
                </div>
            </main>
        </Def>
    )
}

module.exports = error404