import React from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {

    return (
        <div style={{margin: '100px'}}>
            <center>
                <RingLoader css={override}  loading={true} size={150} color={'#fc8181'}/>
                <b>Loading...</b>
            </center>
        </div>
    )
}

export default Loader