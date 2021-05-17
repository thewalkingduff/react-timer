import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function tick() {
    const element = (
        <main>
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        </main>

    );
    ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);