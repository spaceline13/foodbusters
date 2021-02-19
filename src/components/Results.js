import Paper from "@material-ui/core/Paper";
import React from "react";

const Results = ({result, reset}) => {
    return (
        <Paper elevation={3} style={{background: 'rgb(255,255,255,0.9)', padding: '20px', margin: '30px'}}>
            {result}
            <br />
            <center>
                <div onClick={reset} className={'btn'}><b>TEST ANOTHER TEXT</b> </div>
            </center>
        </Paper>
    )
}

export default Results