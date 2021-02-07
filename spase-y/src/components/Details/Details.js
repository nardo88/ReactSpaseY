import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import './details.css';
import useLaunches from '../useLaunches/useLaunches';
import Youtube from 'react-youtube';

const Details = (props) => {
    const [launch, setLaunch] = useState(null);
    const {getLaunch} = useLaunches();
    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id))
    });

    const history = useHistory();

    console.log(launch);

    if(!launch) return null;

    return (
        <>
            <Main rocket={launch.name} />
            <main className="details">
                <div className="container">
                        <div className="details-row">
                            <div className="details-image">
                                <img src={launch.links.patch.small} alt={launch.name} />
                            </div>
                            <div className="details-content">
                                <p className="details-description">{launch.details}</p>
                            </div>
                            <Youtube className="details-youtube" videoId={launch.links.youtube_id} />
                        </div>
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
}

export default Details;