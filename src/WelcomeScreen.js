import React from 'react'
import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { Bars } from 'react-loader-spinner'
import UserDataContext from './context/UserDataContext';

const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`

export default function WelcomeScreen() {

  const [context, setContext] = useContext(UserDataContext);
  const [hidePassword, setHidePassword] = useState(true)
  const [data, setData] = useState(
    {
      email: '',
      id: 0,
      image: '',
      name: '',
      password: '',
      token: ''
    }
  )
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    }
  )

  function enterApp() {
    axios.post(URL, login)
      .then(response => {
        console.log('response', response)
        setData(response.data);
        console.log('data', data);
        setContext(response.data)
        console.log('context', context)
      })
      .then(window.open('/habitos', '_self'))
      .catch(error => console.log(error))

  }

  return (
    <>
      <Container>
        <img alt='logo' src={"./logo.png"} />
        <h1>TrackIt</h1>
        <input
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          type='email'
          placeholder='email'
          value={login.email}
        />
        <input
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          type={hidePassword ? 'password' : 'text'}
          placeholder='senha'
          value={login.password}
        />
        <div>{
          hidePassword ?
            <div className='show-and-hide-password' onClick={() => setHidePassword(!hidePassword)} >
              <h1 >
                <ion-icon name="eye-outline" />
                Show password
              </h1>
            </div>
            :
            <div className='show-and-hide-password' onClick={() => setHidePassword(!hidePassword)} >
              <h1>
                <ion-icon name="eye-off-outline" />
                Hide password
              </h1>
            </div>
        }
        </div>
        <button onClick={() => enterApp()}>
          <h1>Entrar</h1>
        </button>

        <Link to={'/cadastro'}>
          <h2>Não tem uma conta? Cadastre-se!</h2>
        </Link>
        {/* <Bars></Bars> */}
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
  
  ion-Icon{
    color: #52B6FF;
    font-size: 20px;
    cursor: pointer;
    margin: none;
    margin-right: 5px;
  }
  .show-and-hide-password{
    margin-top: 10px;
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .show-and-hide-password h1{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lexend Deca;
    font-size: 20px;
    margin: none;
    color: #52B6FF;
  }
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
    text-decoration: none;
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