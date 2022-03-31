import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export default function Footer() {
  return (
    <ProgressBar>
      <h1>Habitos</h1>
      <div className='circle'>
        {/* <div className='footer-bar'>
          <CircularProgressbar value={40} text={`Hoje`} />;
        </div> */}
      </div>
      <h1>Historico</h1>
    </ProgressBar>
  )
}
const ProgressBar = styled.div`
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  h1{
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color:  #52B6FF;
    padding-bottom: 26px;
    padding-top: 26px;
    cursor: pointer;
  }

  .circle{
    position: fixed;
    background-color: #52B6FF;
    height: 91px;
    width: 91px;
    border-radius: 50%;
    bottom: 10px;
  }

  .footer-bar{
    width:100vw;
    height: 91px;
  }
`