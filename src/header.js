import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

export default function header() {
    return (
        <>
           <AppBar position="static">
            <ul>
                <li><Link to="/"><div style={{"color": "white"}}>Home</div></Link></li>
                <li><Link to="/languagescount"><div style={{"color": "white"}}>Task2</div></Link></li>
                <li><Link to="/copyclipboard"><div style={{"color": "white"}}>Copyclipboard</div></Link></li>
                <li><Link to="/selfiefunctionality"><div style={{"color": "white"}}>Selfie Functionality</div></Link></li>
            </ul>
          </AppBar>
            
        </>
    )
}