import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ color: 'darkblue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
            <p style={{ fontSize: '18px', marginBottom: '5px' }}>
                Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span>
            </p>
            <p style={{ fontSize: '16px', color: 'gray' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
