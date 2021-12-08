import React, { useState } from 'react';

function Form(props) {
    const [giphyTitle, setGiphyTitle] = useState('')

    const refreshPage = () => {
        window.location.reload();
    }


    const handleSubmit = e => {
        console.log('handleSubmit clicked');
        e.preventDefault();
        props.handleSubmit(giphyTitle)
        setGiphyTitle('')
    };

    const handleChange = e => {
        console.log('handleChange clicked');
        const title = e.target.value
        setGiphyTitle(title)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="giphyTitle">Title:</label>
                <input
                    id="giphyTitle"
                    type="text"
                    value={giphyTitle}
                    onChange={handleChange}
                />
                <input type="submit" value="Find Giphy Info" />
                <div>
                <button onClick={refreshPage}> Click to reload! </button>
                </div> 
            </form>
        </>
    );
}

export default Form;