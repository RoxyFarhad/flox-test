import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

export default function RightColumn() {
    
    const linkTwitter = () => {
        // TODO : link twitter account
    }

    const linkInstagram = () => {
        // TODO : link Instagram account
    }

    return (
        <div className="right"> 
            <div className="header"> 
                <IconButton > <InstagramIcon style={{color: 'black'}} fontSize="large"/> </IconButton>
                <IconButton > <TwitterIcon style={{color: 'black'}} fontSize="large"/> </IconButton>
            </div>
        </div>
    )

}
