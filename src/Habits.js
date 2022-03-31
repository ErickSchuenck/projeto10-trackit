import React from 'react'
import styled from 'styled-components';




export default function Habits({ habits }) {
  if (habits.length === 0) {
    return (
      <HabitsList>
        <>
          <div className='my-habits'>
            <h1>
              Meus Hábitos
            </h1>
            <ion-icon name="add-circle"></ion-icon>
          </div>
          <div className='i-dont-have-any-habits'>
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
          </div>

        </>
      </HabitsList>
    )
  }
  else {
    return (
      <HabitsList>
        <>
          <div className='my-habits'>
            <h1>
              Meus Hábitos
            </h1>
            <ion-icon name="add-circle"></ion-icon>
          </div>
        </>
      </HabitsList>
    )
  }
}

const HabitsList = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 140px;
  overflow-x: none;
  background-color: #E5E5E5;

  .my-habits{
    width: 100vw;
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 30px;
  }
  .my-habits h1{
    margin-left: 17px;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #126BA5;
  }
  .my-habits ion-icon{
    color: #52B6FF;
    font-size: 40px;
    cursor: pointer;
  }
  .i-dont-have-any-habits{
    margin-left: 20px;
    margin-right: 20px;
  }
  .i-dont-have-any-habits h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`
