import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import UserDataContext from './context/UserDataContext';

const weekdaysDefault = [
  {
    name: 'sunday',
    initialLetter: 'D',
    isSelected: false,
    number: 0
  },
  {
    name: 'monday',
    initialLetter: 'S',
    isSelected: false,
    number: 1
  },
  {
    name: 'tuesday',
    initialLetter: 'T',
    isSelected: false,
    number: 2
  },
  {
    name: 'wednesday',
    initialLetter: 'Q',
    isSelected: false,
    number: 3
  },
  {
    name: 'thursday',
    initialLetter: 'Q',
    isSelected: false,
    number: 4
  },
  {
    name: 'friday',
    initialLetter: 'S',
    isSelected: false,
    number: 5
  },
  {
    name: 'saturday',
    initialLetter: 'S',
    isSelected: false,
    number: 6
  }
];


export default function Habits({ habits }) {
  const [weekdays, setWeekdays] = useState(weekdaysDefault)
  const [createNewHabitContainer, setCreateNewHabitContainer] = useState(false)
  const [myHabits, setMyHabits] = useState([])
  const [nameOfTheHabit, setNameOfTheHabit] = useState('')
  const [myNewHabit, setMyNewHabit] = useState({})
  const userData = JSON.parse(localStorage.getItem('login'))


  function saveHabit() {
    let newHabitDays = []
    weekdays.forEach((day) => { if (day.isSelected === true) newHabitDays.push(day.number) })
    setMyNewHabit({
      name: `${nameOfTheHabit}`,
      days: newHabitDays,
    })
    console.log('aqui', newHabitDays)
    console.log('o que está sendo enviado', myNewHabit)
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      }
    }
    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', myNewHabit, config)
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        console.log(error);
        alert("Erro de envio ☹ algo está dando errado");
      }
      )
  }

  function selectDay(idx) {
    setWeekdays(weekdays => {
      weekdays[idx].isSelected = !weekdays[idx].isSelected
      console.log(weekdays)
      return [...weekdays]
    })
  }

  if (myHabits.length === 0) {
    return (
      <HabitsList>
        <>
          <div className='my-habits'>
            <h1>
              Meus Hábitos
              <UserDataContext.Consumer>
                {value => <>1{value.userContext.name}2</>}
              </UserDataContext.Consumer>
            </h1>
            <ion-icon
              name="add-circle"
              onClick={() => setCreateNewHabitContainer(!createNewHabitContainer)}
            />
          </div>
          {createNewHabitContainer === true ?
            <div className='create-new-habit-container'>
              <input type={'text'} placeholder={'nome do hábito'} onChange={e => setNameOfTheHabit(e.target.value)} />
              <div className='week'>
                {weekdays.map((day, idx) =>
                  <>{day.isSelected ?
                    <div id={day.name} className='week-days selected' onClick={() => selectDay(idx)}>
                      <h1>
                        {day.initialLetter}
                      </h1>
                    </div>
                    :
                    <div className='week-days' onClick={() => selectDay(idx)}>
                      <h1>
                        {day.initialLetter}
                      </h1>
                    </div>
                  }
                  </>
                )}
              </div>
              <div className='lower-create-habit-container'>
                <h1
                  onClick={() => setCreateNewHabitContainer(!createNewHabitContainer)}
                >
                  Cancelar
                </h1>
                <button>
                  <h1 onClick={() => saveHabit()}>
                    Salvar
                  </h1>
                </button>
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
            <ion-icon
              name="add-circle"
              onClick={() => setCreateNewHabitContainer(!createNewHabitContainer)}
            />
          </div>
          {createNewHabitContainer === true ?
            <div className='create-new-habit-container'>
              <input type={'text'} placeholder={'nome do hábito'} onChange={e => setNameOfTheHabit(e.target.value)} />
              <div className='week'>
                {weekdays.map((day, idx) =>
                  <>{day.isSelected ?
                    <div id={day.name} className='week-days selected' onClick={() => selectDay(idx)}>
                      <h1>
                        {day.initialLetter}
                      </h1>
                    </div>
                    :
                    <div className='week-days' onClick={() => selectDay(idx)}>
                      <h1>
                        {day.initialLetter}
                      </h1>
                    </div>
                  }
                  </>
                )}
              </div>
              <div className='lower-create-habit-container'>
                <h1
                  onClick={() => setCreateNewHabitContainer(!createNewHabitContainer)}
                >
                  Cancelar
                </h1>
                <button>
                  <h1 onClick={() => saveHabit()}>
                    Salvar
                  </h1>
                </button>
              </div>
            </div>
            :
            <></>
          }
          {/* {myHabits.map(habit => <div><h1>teste</h1></div>)} */}
        </>
      </HabitsList>
    )
  }
}

const HabitsList = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 70px;
  overflow-x: none;
  background-color: #E5E5E5;

  .create-new-habit-container{
    margin-bottom: 29px;
    width: 340px;
    height: 180px;
    margin-left: 50%;
    transform: translate(-50%,0);
    background-color: #fff;
    border-radius: 6px;
    position: relative;
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
  .lower-create-habit-container{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
  .lower-create-habit-container h1{
    color:  #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-right: 22px;
    cursor: pointer;
  }
  .lower-create-habit-container button{
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lower-create-habit-container button h1{
    margin: 0;
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
  }
`
