import React from 'react'

function toggle(props) {
    return (props.trigger) ? (
        <div classname = "signup" style = {{position: "absolute",  width: "100%",
            height: "100vh", backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "5",
            }}></div>

    ) : "";
}

export default toggle
