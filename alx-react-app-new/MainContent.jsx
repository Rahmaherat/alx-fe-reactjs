import React from 'react';

function MainContent() {
    return (
        <main style={{
            backgroundColor: '#f9f9f9', 
            color: '#333', 
            padding: '20px', 
            margin: '20px auto', 
            maxWidth: '800px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                I love to visit New York, Paris, and Tokyo.
            </p>
        </main>
    );
}

export default MainContent;
