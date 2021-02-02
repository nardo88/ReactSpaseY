import React from 'react';
import './main.css'

const video = {
    'Falcon 1': 'moon',
    'Falcon 9': 'earth',
    'Falcon Heavy': 'mars',
    other : 'space',
}

const Main = ({rocket}) => {
    return (
        <>
        <section className="main">
            <h1 className="title">{rocket}</h1>
            <div className="video-container">
                <video className="video" autoPlay loop muted src={`./video/${video.hasOwnProperty(rocket) ? video[rocket] : video.other}.mp4`} />
            </div>
        </section>
        </>
    )
}

export default Main;