import React, { useState, useEffect, useRef } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { slogans } from "design.js";
import parse, {domToReact} from 'html-react-parser';

export default function RightColumn() {
    
    const i = useRef(0);
    const [slogan, setSlogan] = useState('');
    useEffect(() => {
        const updateSlogan = () => {
            const j = i.current
            i.current = j === slogans.length - 1 ? 0 : j + 1;
            setSlogan(slogans[j]);   
        }
        if(slogan.length === 0){
            updateSlogan();
        } else {
            setTimeout(updateSlogan, 7500)
        }
    }, [slogan])
    
    const linkTwitter = () => {
        // TODO : link twitter account
    }

    const linkInstagram = () => {
        // TODO : link Instagram account
    }

    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) return;     
            if (attribs.id === 'blue') {
                return <p style={{ color: '#A3C4D3' }}>{domToReact(children, options)}</p>;
          }
        }
    };

    return (
        <div className="right"> 
            <div className="header"> 
                <IconButton > <InstagramIcon style={{color: 'black'}} fontSize="large"/> </IconButton>
                <IconButton > <TwitterIcon style={{color: 'black'}} fontSize="large"/> </IconButton>
            </div>
            <div className="main"> 
                <div className="iphoneImage"> Hello </div>
                <div className="changingText"> 
                    {parse(slogan, options)}
                </div>
            </div>
        </div>
    )

}
