import React from 'react';
import BlueBirds from 'logos/blue-birds.png'; 
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';

const numberField = makeStyles({
    root: {
        fontFamily: 'avenir', 
        borderColor: "#E6E6E6",
        display: "inline-flex",
        width: "250px",
        borderRadius: "0",
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "#E6E6E6"
        },
        "& label": {
            color: "#3F51A2",
            fontFamily: "avenir"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E6E6E6",
        },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E6E6E6",
        },
    },
    input: {
        fontFamily: "avenir",
        fontSize: "13px",
        color: "#000000",
        borderRadius: "0",
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E6E6E6",
            color: "#436BA8"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
            borderWidth: "2px",
        }
    }
})

const waitlistButton = makeStyles({
    root: {
      backgroundColor: "#A3C4D3",
      fontFamily: "avenir",
      color: "white",
      height: "53px",
      textTransform: "none",
      width: "150px",
      borderRadius: "0",
      "&:hover": {
        backgroundColor: "#A3C4D3",
        fontFamily: "avenir",
        color: "white"  
      }
    }
  });
  

export default function LeftColumn() {
    const numberStyles = numberField();
    const waitlistButtonStyles = waitlistButton();

    return (
        <div className="left"> 
            <div className="top"> 
                <img src={BlueBirds} alt="" className="BlueBirds" />
                <h1> flox </h1>
            </div>
            <div className="body"> 
                <p> Find new people </p>
                <p> <i> with your </i>people </p>
                <span className="input"> 
                    <TextField 
                        className={numberStyles.root} 
                        placeholder="Phone Number" 
                        variant="outlined" 
                        InputProps={{ className: numberStyles.input }}
                    />
                    <Button className={waitlistButtonStyles.root} > Join the waitlist </Button>
                </span>
            </div>
        </div>
    )

}
