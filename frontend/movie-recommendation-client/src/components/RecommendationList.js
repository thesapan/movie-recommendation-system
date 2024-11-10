import React from 'react';

function RecommendationList({ recommendations }) {
    return (
        <ul>
            {recommendations.map((movie, index) => (
                <li key={index}>{movie}</li>
            ))}
        </ul>
    );
}

export default RecommendationList;
