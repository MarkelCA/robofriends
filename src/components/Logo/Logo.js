import React, { Component } from 'react'

const Logo = () => {
       return <div id="main-logo-container">
            <img id='main-logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="markel"/>
        </div>
}

export default Logo;
