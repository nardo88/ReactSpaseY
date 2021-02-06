import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper';
import './features.css'

const images = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    other : 'starship',
}

const Features = ({rocketFeatures, rocket}) => {

    const {name, diameter, height, mass, description, payload_weights} = rocketFeatures ? rocketFeatures : '';

    return (
        
        <>
            <section className="features">
                <h2 className="features-title">
                    {name} <br/>Overview
                </h2>
                <div className="overview">

                    <table className="table">
                        <caption className="table-title">
                            Size
                        </caption>
                        <thead>
                            <tr>
                                <td className="table-column">HEIGHT</td>
                                <td className="table-column">{height ? height.meters : ''} m / {height ? height.feet : ''} ft</td>
                            </tr>
                            <tr>
                                <td className="table-column">DIAMETER</td>
                                <td className="table-column">{diameter ? diameter.meters : '' } m / {diameter ? diameter.feet : ''} ft</td>
                            </tr>
                            <tr>
                                <td className="table-column">MASS</td>
                                <td className="table-column">{mass ? mass.kg : ''} kg / {mass ? mass.lb : ''} lb</td>
                            </tr>
                            <tr>
                                <td className="table-column">PAYLOAD TO LEO</td>
                                <td className="table-column">{payload_weights ? payload_weights[0].kg : ''} kg / {payload_weights ? payload_weights[0].lb : ''} lb</td>
                            </tr>
                        </thead>
                    </table>
                    <RelaxWrapper speed={14}>
                        <img src={`img/${images.hasOwnProperty(rocket) ? images[rocket] : images.other}.png`} alt="rocket" className="rocket" /> 
                    </RelaxWrapper>
                    
                    <article>
                        <h3 className="features-subtitle">DESCRIPTION</h3>
                        <p className="features-text"> {description }
                        
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Features;