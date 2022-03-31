import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Home() {
  return (
    <Header>
      <div className='cursive-logo'>
        <h1>
          TrackIt
        </h1>
      </div>
      <img alt='user' src='https://i2-prod.birminghammail.co.uk/incoming/article11256820.ece/ALTERNATES/s1200c/JS88492176.jpg' />
    </Header>
  )
}

const Header = styled.div`
  height: 70px;
  background-color: #126BA5;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    border-radius: 50%;
    width: 51px;
    height: 51px;
    margin-right: 18px;
  }
`
