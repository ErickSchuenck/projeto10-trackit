import React from 'react'
import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { Grid } from 'react-loader-spinner'
import UserDataContext from './context/UserDataContext';


const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`


export default function WelcomeScreen() {

  const [loading, setLoading] = useState(false)
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
  const { setUserContext } = useContext(UserDataContext)
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    }
  )
  const navigate = useNavigate()
  function enterApp() {
    setLoading(true)
    axios.post(URL, login)
      .then(response => {
        console.log('response', response)
        setData(response.data);
        localStorage.setItem('login', JSON.stringify(response.data.token))
        setUserContext({ name: response.data.name, image: response.data.image })
        navigate('/habitos')
      })

      .catch(error => {
        setLoading(false)
        console.log(error);
        alert("Erro de login, favor checar novamente os dados. Se não possui uma conta, experimente se cadastrar antes!");
      }
      )
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

        <Button loading={loading} enterApp={enterApp} />


        <Link to={'/cadastro'}>
          <h2>Não tem uma conta? Cadastre-se!</h2>
        </Link>

      </Container>
    </>
  )
}

function Button({ enterApp, loading }) {
  if (!loading) {
    return (
      <button onClick={() => enterApp()}>
        <h1>Entrar</h1>
      </button>
    )
  } else {
    console.log('pegou')
    return (
      <div className='loading-container'>
        <Grid />
      </div>
    )
  }
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .loading-container{
    width: 100px;
    height: 100px;
    margin: 10px;
  }
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