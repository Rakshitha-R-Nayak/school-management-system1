import React from 'react';

function LoginButton() {
    const handleLoginClick = () => {
        // URL to open in the new window
        const url = 'https://www.example.com';
        // Open the URL in a new window/tab
        window.open(url, '_blank');
    };

    return (
        <button onClick={handleLoginClick}>Login</button>
    );
}

export default LoginButton;
