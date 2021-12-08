import React, { useState, useEffect } from 'react';
import Form from './Form';
import './App.css';
import GiphyInfo from './GiphyInfo';


function App() {
    const [giphyTitle,setGiphyTitle] = useState('')
    const [GiphyData, setGiphyData] = useState([]);



    const handleSubmit = title => {
        console.log('App - makeApiCall - title', title);
        setGiphyTitle(title)
    };

useEffect(() => {
    let giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=TLHHAg3CjfvrlzSdLzqYBwgwXFHB4Qyo&tag=${giphyTitle}`
    const makeApiCall = () => {
    fetch(giphyUrl)
    .then(res => res.json())
    .then(data => {
        console.log('GiphyData', data)
        setGiphyData(data)
    })
    }
    makeApiCall()
},[giphyTitle])

return (
    <div className="App">
    <div>Awesome Giphy</div>
    <Form handleSubmit={handleSubmit} />
    {GiphyData.data? <GiphyInfo giphy={GiphyData} /> : null}
    </div>
    );
}

export default App;