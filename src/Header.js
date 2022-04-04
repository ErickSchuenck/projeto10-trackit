import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components';
import UserDataContext from './context/UserDataContext';

export default function Header() {
  const { userContext } = useContext(UserDataContext)

  return (
    <HeaderBar>
      <div className='cursive-logo'>
        <h1>
          TrackIt
        </h1>
      </div>
      <img alt='user' src={userContext.image} />
    </HeaderBar>
  )
}

const HeaderBar = styled.div`
  z-index: 9999999;
  height: 70px;
  background-color: #126BA5;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  overflow-x: none;

  img{
    border-radius: 50%;
    width: 51px;
    height: 51px;
    margin-right: 18px;
  }
  h1{
    font-family: Playball;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin-left: 18px;
  }
`