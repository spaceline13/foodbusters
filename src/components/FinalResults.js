import GaugeChart from 'react-gauge-chart'
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts'
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
const FinalResults = ({result}) => {
    const { text, jsonElasticSearch, jsonClassification } = result
    return (
        <div>
            <center>
                <Blockquote>{text}</Blockquote>
                <ResultText>True</ResultText>
                <div style={{maxWidth: '500px'}}>
                    <GaugeChart id="gauge-chart2"
                                nrOfLevels={4}
                                percent={0.86}
                                colors={["#68d391", "#fc8181"]}
                    />
                </div>
                <hr style={{marginTop: '20px'}}/>
                Based on EFSA Datasets: Mostly True
                <br />
                Based on Snopes Machine Learning: Mostly False
                <hr style={{marginBottom: '50px'}}/>
                <BarChart width={730} height={250} data={[{ name: 'a', value: [0, 12] }, { name: 'b', value: [0, 6] }]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#63b3ed" />
                </BarChart>
                <hr style={{marginTop: '50px'}}/>
                <Button><DescriptionOutlinedIcon /> See original doc</Button>
                <hr style={{marginTop: '50px', marginBottom: '50px'}}/>
                Highlighted text here
            </center>
        </div>
    )
}

export default FinalResults