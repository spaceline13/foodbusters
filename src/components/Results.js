import Paper from "@material-ui/core/Paper";
import React from "react";
import FinalResults from "./FinalResults";

const Results = ({result, reset}) => {
    const { jsonElasticSearch, jsonClassification } = result
    return (
        <Paper elevation={3} style={{background: 'rgb(255,255,255,0.9)', padding: '20px', margin: '30px'}}>
            {jsonClassification &&
                <table>
                    <thead>
                        <tr>
                            <th>True</th>
                            <th>Mostly true</th>
                            <th>Mixture</th>
                            <th>False</th>
                            <th>is_negation</th>
                            <th>sentiment</th>
                            <th>sentiment_prob</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{jsonClassification['True']} &nbsp; </td>
                            <td>{jsonClassification['Mostly True']} &nbsp; </td>
                            <td>{jsonClassification['Mostly False']} &nbsp; </td>
                            <td>{jsonClassification['False']} &nbsp; </td>
                            <td>{jsonClassification['is_negation']} &nbsp; </td>
                            <td>{jsonClassification['sentiment']} &nbsp; </td>
                            <td>{jsonClassification['sentiment_prob']} &nbsp; </td>
                        </tr>
                    </tbody>
                </table>
            }
            {jsonElasticSearch && jsonElasticSearch.hits &&
                <table>
                    <thead>
                        <tr>
                            <th>score</th>
                            <th>title</th>
                            <th>abstract</th>
                            <th>conclusion</th>
                            <th>verdict</th>
                            <th>url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonElasticSearch.hits.hits.map(hit => {
                            const item = hit._source
                            const score = hit._score
                            const index = hit._index
                            return (
                                <tr>
                                    <td>{Math.round(score)}</td>
                                    <td><div style={{height: '150px', overflow: 'auto', maxWidth: '300px'}}>{item.title}</div></td>
                                    <td><div style={{height: '150px', overflow: 'auto', maxWidth: '300px'}}>{item.abstract}</div></td>
                                    <td><div style={{height: '150px', overflow: 'auto', maxWidth: '300px'}}>
                                        <b>{item.concluded_part}</b>
                                        {item.conclusions}
                                    </div></td>
                                    <td>
                                        <div style={{height: '150px', overflow: 'auto'}}>
                                            <div><b>strong:</b> {item.strong_score}</div>
                                            <div><b>medium:</b> {item.medium_score}</div>
                                            <div><b>low:</b> {item.low_score}</div>
                                            <div><b>final:</b> {item.final_score}</div>
                                            <div><b>verdict:</b> {item.verdict}</div>
                                            {item.sentiment && item.sentiment.probability && <div><b>S</b>:n:{item.sentiment.probability.neg.toFixed(2)} p:{item.sentiment.probability.pos.toFixed(2)} nt:{item.sentiment.probability.neutral.toFixed(2)}</div>}
                                            <div><b>negation:</b> {item.is_negation}</div>
                                        </div>
                                    </td>
                                    <td><div style={{height: '150px', overflow: 'auto'}}><a href={item.url}>click here</a></div></td>
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

            {/*{result && <FinalResults result={result} />}*/}
        </Paper>
    )
}

export default Results