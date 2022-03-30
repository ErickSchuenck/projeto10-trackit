import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function RegisterScreen() {
  return (
    <>
      <Container>
        <img alt='logo' src={"./logo.png"} />
        <h1>TrackIt</h1>
        <input type='text' placeholder='email' />
        <input type='text' placeholder='senha' />
        <input type='text' placeholder='nome' />
        <input type='text' placeholder='foto' />
        <button><h1>Cadastrar</h1></button>
        <Link to={'/'}>
          <h2>Já tem uma conta? Faça login!</h2>
        </Link>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  h1{
    margin-top: 0px;
    font-family: 'Playball', cursive;
    color: #126BA5;
    font-size: 69px;
    font-style: normal;
    font-weight: 400;
    line-height: 86px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 32px;
  }
  h2{
    font-family: Lexend Deca;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #52B6FF;
    text-decoration: underline;
  }
  input{
    height: 45px;
    width: 303px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-bottom: 6px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #52B6FF;
    padding-left: 10px;
  }
  input::placeholder{
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #DBDBDB;
    padding-left: 10px;
  }
  input:focus{
    Outline: 0;
  }
  button{
    width: 303px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    margin-bottom: 36px;
  }
  button h1{
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: white;
    margin: 0;
  }
  img{
    width:180px;
  }

`;