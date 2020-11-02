import React from 'react'

import squiggle from '../../assets/fancy-squiggle.svg'

const Landing = () => {

    return(
        <div style={{height: "calc(100vh - 60px)", width: "100%", background: "#fefefe", position: 'static'}}>
            <img src={squiggle} style={{transform: "scaleY(1.1) scaleX(1.2)", width: "100%", position: 'absolute', bottom: "0px", fill: "red", filter: "drop-shadow(0px -5px 2px rgba(0,0,0,0.04)" }}></img>

        </div>
    )
}

export default Landing