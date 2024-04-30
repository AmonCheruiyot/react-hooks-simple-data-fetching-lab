// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
    const [dogImageUrl, setDogImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDogImageUrl(data.message);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <img src={dogImageUrl} alt="A Random Dog" />
            )}
        </div>
    );
};

export default App;