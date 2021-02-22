import Paper from "@material-ui/core/Paper";
import React from "react";
import FinalResults from "./FinalResults";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import Button from "@material-ui/core/Button";

const Results = ({result, reset}) => {
    const { jsonElasticSearch, jsonClassification } = result
    return (
        <Paper elevation={3} style={{background: 'rgb(255,255,255,0.9)', padding: '20px', margin: '30px'}}>

            {result && <FinalResults result={result} />}
            Evidence from EFSA:
            {jsonElasticSearch && jsonElasticSearch.hits &&
                <table style={{width: '100%'}}>
                    <thead>
                        <tr style={{padding: '10px', border: '1px solid #d2d1c1'}}>
                            <th>Rank</th>
                            <th>Text</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonElasticSearch.hits.hits.map((hit, i) => {
                            const item = hit._source
                            const score = hit._score
                            const index = hit._index
                            const text = hit.highlight && hit.highlight['concluded_part.english_stemmed'] ? hit.highlight['concluded_part.english_stemmed'].join(' ') : ''
                            return (
                                <tr style={{padding: '10px', border: '1px solid #d2d1c1'}}>
                                    <td style={{padding: '10px'}}>{i+1}</td>
                                    <td style={{padding: '10px'}}><div dangerouslySetInnerHTML={{__html: text}}></div></td>
                                    <td style={{padding: '10px'}}><div><a href={item.url}><Button><DescriptionOutlinedIcon />Source</Button></a></div></td>
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