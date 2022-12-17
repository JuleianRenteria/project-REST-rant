const React = require('react')

function Default (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default
