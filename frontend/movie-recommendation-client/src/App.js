import React, { useState } from 'react';
import Form from './components/Form';
import RecommendationList from './components/RecommendationList';

function App() {
    const [recommendations, setRecommendations] = useState([]);

    return (
        <div>
            <h1>Movie Recommendation System</h1>
            <Form setRecommendations={setRecommendations} />
            <RecommendationList recommendations={recommendations} />
        </div>
    );
}

export default App;
