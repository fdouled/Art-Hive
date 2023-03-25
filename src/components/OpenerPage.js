import React from "react";
import { Link } from 'react-router-dom'


function OpenerPage () {
    return (
    <main className = 'opener-page'>
        <div className = 'opener-page-content' style={{backgroundImage: `url("https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1945&q=80")`}}>
            <div className = 'opener-page-left'>
                <h2 className = 'opener-page-smaller-text'>Hello, welcome to</h2>
                <h1 className = 'opener-page-main-text'>ArtHive</h1>
            </div>
            <div className = 'opener-page-left'>
                <p className = 'opener-page-app-description'>ArtHive is a discovery space for your art interests.
                With the ability to search for pieces by medium and artists by location, you can find artists to contact
                directly and buy pieces from. 
                Try it out. </p>
                <button className = 'opener-page-gallery-nav'><Link to='/gallery'>Browse the Gallery</Link></button>
            </div>
        </div>
    </main>
    );
}

export default OpenerPage;