import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export default function Footer() {
  return (
    <ProgressBar>
      <CircularProgressbar value={40} text={`Hoje`} />;
    </ProgressBar>
  )
}
const ProgressBar = styled.div`
  background-color: red;
  width: 91px;
  height: 91px;
  position: fixed;
  bottom: 0;
  left: 0;
  
`