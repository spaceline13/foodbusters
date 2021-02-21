import styled from '@emotion/styled'
import React from "react";
const Quote = styled.div`
    font-family: 'Special Elite', cursive;
    font-weight: 100;
    font-size: 2rem;
    max-width: 600px;
    line-height: 1.4;
    position: relative;
    margin: 0;
    padding: .5rem;
    &:before {
        content: '“';
        left: -5rem;
        top: -2rem;
        position: absolute;
        color: #c7c7b2;
        font-size: 8rem;
        width: 4rem;
        height: 4rem;
    }
    &:after {
        content: '”';
        right: -5rem;
        bottom: 1rem;
        position: absolute;
        color: #c7c7b2;
        font-size: 8rem;
        width: 4rem;
        height: 4rem;
    }
`
const Blockquote = ({children}) => {
    return (
        <Quote>{children}</Quote>
    )
}

export default Blockquote