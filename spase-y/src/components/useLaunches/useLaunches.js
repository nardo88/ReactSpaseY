import { useState, useEffect } from 'react';
import FetchData from '../../service/FetchData';


const fetchData = new FetchData();

const useLaunches = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData.getLaunches()
            .then(data => setData(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);

    const getLaunch = id => data.find(item => item.id === id);

    return {data, getLaunch}
}


export default useLaunches;