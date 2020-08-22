import React from 'react';
import BlueBirds from 'logos/blue-birds.png'; 
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';

const numberField = makeStyles({
    root: {
        fontFamily: 'avenir', 
        borderColor: "#A3C4D3",
        display: "inline-flex",
        width: "250px",
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "#A3C4D3"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
        },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
        },
    },
    input: {
        fontFamily: "avenir",
        fontSize: "13px",
        color: "#000000",
        borderRadius: "4px 0px 0px 4px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
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
      borderRadius: "0px 4px 4px 0px",
      "&:hover": {
        backgroundColor: "#A3C4D3",
        fontFamily: "avenir",
        color: "white"  
      },
    }
});
 
export const inputFields = makeStyles({
    root: {
        fontFamily: 'avenir', 
        borderColor: "#A3C4D3",
        marginTop: '20px',
        width: "400px",
        borderRadius: '4px',
        fontSize: "13px",
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "#A3C4D3"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
        },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
        },
        "& label": {
            fontFamily: "avenir",
            fontSize: "13px",
          },
          "&:hover label": {
            color: "#A3C4D3"
          },
          "& label.Mui-focused": {
            color: "#A3C4D3"
          },
    },
    input: {
        fontFamily: "avenir",
        color: "#000000",
        fontSize: "13px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A3C4D3",
            borderWidth: "2px",
        }
    }
})
export default function LeftColumn() {
    const numberStyles = numberField();
    const waitlistButtonStyles = waitlistButton();
    const textStyles = inputFields();
    return (
        <div className="left"> 
            <div className="top"> 
                <img src={BlueBirds} alt="" className="BlueBirds" />
                <h1> flox </h1>
            </div>
            <div className="body"> 
                <p> Find new people </p>
                <p> <i> with your </i>people. </p>
                <div> <TextField label="Name" className={textStyles.root} InputProps={{ className: textStyles.input }} variant="outlined"/> </div>
                <div> <TextField label="Email" className={textStyles.root} InputProps={{ className: textStyles.input }} variant="outlined"/> </div>
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
