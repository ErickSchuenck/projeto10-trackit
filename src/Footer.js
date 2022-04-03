import React from 'react'
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export default function Footer() {
  return (
    <ProgressBar>
      <h1 onClick={() => window.open('/habitos', '_self')}>Habitos</h1>
      <div className='circle' onClick={() => window.open('/hoje', '_self')}>

        <CircularProgressbar
          value={60}
          text={`Hoje`}
          styles={
            buildStyles({


              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',

              // Text size
              textSize: '16px',



              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `rgba(255, 255, 255, 100)`,
              textColor: '#fff',
              trailColor: '#52B6FF',
              backgroundColor: '#3e98c7',
            })} />

      </div>
      <h1 onClick={() => window.open('/historico', '_self')}>Historico</h1>
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
    padding: 6px;
    cursor: pointer;
  }

   
`
