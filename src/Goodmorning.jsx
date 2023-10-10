import React from 'react'

const Goodmorning = () => {

    let CurDate = new Date(2023,9,4,2)
    CurDate = CurDate.getHours();
    let greeting = " ";
    const cssStyle = {};

    if (CurDate >= 1 && CurDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green"
    }
    else if (CurDate >= 12 && CurDate < 19) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange"
    }
    else {
        greeting = "Good Night";
        cssStyle.color = "black"
    }


    return (
        <>
           <div>
           <h1>Hello Sir , <span style={cssStyle}>{greeting} </span> </h1>
           </div>
        </>
    )
}

export default Goodmorning;
