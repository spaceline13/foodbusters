import GaugeChart from 'react-gauge-chart'
import React from "react";
import Blockquote from "./Blockquote";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
const ResultText = styled.div`
    margin: 40px auto;
    font-family: 'Ubuntu', sans-serif;
    font-size: 100px;
    font-weight: bold;
    color: #121212;
    text-align: center;
    letter-spacing: 5px;
    text-shadow: 1px 2px 12px rgb(0 0 0 / 50%), 0px -4px 10px rgb(255 255 255 / 30%);
`
const score_to_text = score => {
    if (score > 0.6) {
        return "False"
    } else if (score > 0.4) {
        return "Mixture"
    } else if (score > 0.2) {
        return "Mostly True"
    } else {
        return "True"
    }
}
const FinalResults = ({result}) => {
    const { text, jsonElasticSearch, jsonClassification } = result
    return (
        <div>
            <center style={{marginTop: '30px'}}>
                <Blockquote>{text}</Blockquote>
                <ResultText>{score_to_text(jsonElasticSearch.result.false_certainty)}</ResultText>
                <div style={{maxWidth: '500px'}}>
                    <GaugeChart id="gauge-chart2"
                                nrOfLevels={4}
                                percent={jsonElasticSearch.result.false_certainty}
                                colors={["#68d391", "#fc8181"]}
                    />
                </div>
                <hr style={{marginTop: '20px'}}/>
                Credibility Score based on EFSA Datasets: {score_to_text(jsonElasticSearch.result.false_certainty)} ({jsonElasticSearch.result.false_certainty.toFixed(2)})
                <br />
                Credibility Score estimated using classifier trained with Snope's datasets: {score_to_text(jsonClassification.False)} ({jsonClassification.False})
                <hr style={{marginBottom: '50px'}}/>

            </center>
        </div>
    )
}

export default FinalResults