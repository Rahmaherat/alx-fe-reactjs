import React from 'react';

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#333', 
            color: 'white', 
            textAlign: 'center', 
            padding: '10px 0', 
            marginTop: '20px',
            borderTop: '2px solid #444'
        }}>
            <p style={{ margin: 0 }}>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;
