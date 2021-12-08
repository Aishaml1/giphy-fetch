import React from 'react'

function GiphyInfo({ giphy }) {
    console.log('props from GiphyInfo', giphy)

    return (
        <>
        <h1> {giphy.data.title}</h1>
        <img src={giphy.data.images.original.url}  alt='giphy' />
        </>
    )
}

export default GiphyInfo