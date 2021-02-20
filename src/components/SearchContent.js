import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import logo from '../assets/img/foodbusterslogo.png'

const SearcContent = ({onAnalyze}) => {
    const [text, setText] = useState('')
    return (
        <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div style={{marginTop: '100px', marginBottom: '40px'}}>
                    <img src={logo} />
                </div>
                <Paper elevation={6} style={{background: 'rgb(255,255,255,0.7)', padding: '20px', margin: '30px'}}>
                    <TextField
                        id="standard-textarea"
                        placeholder="Type your text here"
                        multiline
                        style={{width:'100%'}}
                        rows={6}
                        onChange={(event) => setText(event.target.value)}
                    />
                </Paper>
                <center>
                    <div onClick={()=>onAnalyze(text)} className={'btn'}><i className="fas fa-desktop"></i> &nbsp; <b>ANALYZE</b> </div>
                </center>
            </div>
        </div>
    )
}

export default SearcContent