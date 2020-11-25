import React from 'react';
import styled from 'styled-components';

const Test = styled.Text`
    font-size: 45px;
    font-family: 'SofiaProBlack';
`;

function TestTextComp() {
    return <Test>From Test</Test>;
}

export default TestTextComp;
