import React, { useState } from 'react'
import styled from 'styled-components';




export default function Habits({ habits }) {

  const [createNewHabitContainer, setCreateNewHabitContainer] = useState(false)

  const weekdays = [
    {
      name: 'sunday',
      initialLetter: 'D',
      isSelected: false,
    },
    {
      name: 'monday',
      initialLetter: 'S',
      isSelected: false,
    },
    {
      name: 'tuesday',
      initialLetter: 'T',
      isSelected: false,
    },
    {
      name: 'wednesday',
      initialLetter: 'Q',
      isSelected: false,
    },
    {
      name: 'thursday',
      initialLetter: 'Q',
      isSelected: false,
    },
    {
      name: 'friday',
      initialLetter: 'S',
      isSelected: false,
    },
    {
      name: 'saturday',
      initialLetter: 'S',
      isSelected: false,
    }
  ];
  const myHabits = [
    {
      title: 'fazer o projetão driven',
      days: ['sunday', 'monday', 'tuesday', 'wednesday']
    }
  ]

  function selectDay(day) {
    console.log('day is bein selected')
    day.isSelected = true;
    console.log(weekdays);
  }

  if (habits.length === 0) {
    return (
      <HabitsList>
        <>
          <div className='my-habits'>
            <h1>
              Meus Hábitos
            </h1>
            <ion-icon
              name="add-circle"
              onClick={() => setCreateNewHabitContainer(!createNewHabitContainer)}
            />
          </div>
          {createNewHabitContainer === true ?
            <div className='create-new-habit-container'>
              <input type={'text'} placeholder={'nome do hábito'} />
              <div className='week'>
                {weekdays.map(day =>
                  <>
                    {
                      <div className='week-days' onClick={() => selectDay(day)}>
                        <h1>
                          {day.initialLetter}
                        </h1>
                      </div>
                    }
                  </>
                )}
              </div>
            </div>
            :
            <></>
          }
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

  .create-new-habit-container{
    margin-bottom: 29px;
    width: 340px;
    height: 180px;
    margin-left: 18px;
    background-color: #fff;
    border-radius: 6px;
  }
  .week {
    display: flex;
    width: 100%;
    margin-left: 16px;
  }
  .week-days{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 4px;
  }
  .week-days h1{
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #DBDBDB;
  }
  .create-new-habit-container input{
    width: 90%;
    height: 45px;
    border: 1px solid #D4D4D4;
    margin-top: 16px;
    margin-bottom: 8px;
    margin-left: 50%;
    transform: translate(-50%,0);
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 11px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  .create-new-habit-container input::placeholder{
    padding-left: 11px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
  .create-new-habit-container input:focus{
    outline: 0;
  }
  .my-habits{
    width: 100vw;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
  .selected{
    background-color: #CFCFCF;
    color: #fff;
  }
  .selected h1{
    color: #fff;
  }
`
