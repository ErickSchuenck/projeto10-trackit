import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function WelcomeScreen() {
  return (
    <>
      <Container>
        <Logo alt='logo' src={"./logo.png"} />
        <input type='text' placeholder='email' />
        <input type='text' placeholder='email' />
        <button><h1>Entrar</h1></button>
        <h1>Não tem uma conta? Cadastre-se!</h1>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 180px;


`