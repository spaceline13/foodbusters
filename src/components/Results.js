import Paper from "@material-ui/core/Paper";
import React from "react";

const Results = ({result, reset}) => {
    return (
        <Paper elevation={3} style={{background: 'rgb(255,255,255,0.9)', padding: '20px', margin: '30px'}}>
            {result && result.hits &&
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '15%'}}>index</td>
                            <th style={{width: '15%'}}>score</th>
                            <th style={{width: '15%'}}>title</th>
                            <th style={{width: '15%'}}>abstract</th>
                            <th style={{width: '15%'}}>conclusion</th>
                            <th style={{width: '15%'}}>strong</th>
                            <th style={{width: '15%'}}>medium</th>
                            <th style={{width: '15%'}}>low</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.hits.hits.map(hit => {
                            const item = hit._source
                            const score = hit._score
                            const index = hit._index
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{score}</td>
                                    <td><div style={{height: '150px', overflow: 'auto'}}>{item.title}</div></td>
                                    <td><div style={{height: '150px', overflow: 'auto'}}>{item.abstract}</div></td>
                                    <td><div style={{height: '150px', overflow: 'auto'}}>{item.conclusions}</div></td>
                                    <td><div style={{height: '150px', overflow: 'auto'}}>{item.strong_score}</div></td>
                                    <td><div style={{height: '150px', overflow: 'auto'}}>{item.medium_score}</div></td>
                                    <td><div style={{height: '150px', overflow: 'auto'}}>{item.low_score}</div></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
            <br />
            <center>
                <div onClick={reset} className={'btn'}><b>TEST ANOTHER TEXT</b> </div>
            </center>
        </Paper>
    )
}

export default Results