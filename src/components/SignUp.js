import { render } from '@testing-library/react';
import React, { Component } from 'react'
import "./SignUp.css"
import CloseIcon from '@material-ui/icons/Close';
function SignUp(props) {
    return (props.trigger) ? (
        <div classname = "signup" style = {{position: "absolute",  width: "100%",
            height: "100vh", backgroundColor: "rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "3",
            backdropFilter: "blur(5px)",
            }}>
            <div classname = "signup_inner" style = {{
                position: "relative",
                padding: "32px",
                top: "5%",
                width: "30%",
                maxWidth: "100%",
                height: "75%",
                backgroundColor: "white",
                zIndex: 55,
                borderRadius: "30px",
                }}>
                {props.children}
                <center><h2>Sign Up | Sign In</h2></center>
            </div></div>
     ) : "";
    }

export default SignUp
