import axios from 'axios';
import React, { useState, useEffect } from 'react'
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
  const daysSymbol = ["D", "S", "T", "Q", "Q", "S", "S"];
  const userData = JSON.parse(localStorage.getItem('login'))

  function reloadHabits(config) {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
      .then(response => {
        const { data } = response;
        setMyHabits(data);
      });
    console.log('reloading data')
  }

  useEffect(() => {
    if (!userData) { return }
    const config = {
      headers: {
        Authorization: `Bearer ${userData}`
      }
    }
    reloadHabits(config)
  }, [userData])

  function saveHabit() {
    let newHabitDays = []
    weekdays.forEach((day) => { if (day.isSelected === true) newHabitDays.push(day.number) })
    const myNewHabit = {
      name: `${nameOfTheHabit}`,
      days: newHabitDays,
    }
    const config = {
      headers: {
        Authorization: `Bearer ${userData}`,
      }
    }
    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', myNewHabit, config)
      .then(response => {
        console.log('response', response)
        setCreateNewHabitContainer(!createNewHabitContainer)
      })
      .catch(error => {
        console.log(error);
        alert("Erro de envio ??? algo est?? dando errado");
      }
      )
    reloadHabits(config)
  }

  function selectDay(idx) {
    setWeekdays(weekdays => {
      weekdays[idx].isSelected = !weekdays[idx].isSelected
      return [...weekdays]
    })
  }

  function deleteHabit(habitId) {
    const config = {
      headers: {
        Authorization: `Bearer ${userData}`,
      }
    }
    axios.delete(`
https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}
`, config)
      .then(response => console.log(response),
        alert('seu h??bito foi deletado'))
      .catch(error => console.log(error),
    )
    reloadHabits(config)
  }

  if (myHabits.length === 0) {
    return (
      <HabitsList>
        <>
          <div className='my-habits'>
            <h1>
              Meus H??bitos
            </h1>
            <ion-icon
              name="add-circle"
              onClick={() => setCreateNewHabitContainer(!createNewHabitContainer)}
            />
          </div>
          {createNewHabitContainer === true ?
            <div className='create-new-habit-container'>
              <input type={'text'} placeholder={'nome do h??bito'} onChange={e => setNameOfTheHabit(e.target.value)} />
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
            <h1>Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!</h1>
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
              Meus H??bitos
            </h1>
            <ion-icon
              name="add-circle"
              onClick={() => setCreateNewHabitContainer(!createNewHabitContainer)}
            />
          </div>
          {createNewHabitContainer === true ?
            <div className='create-new-habit-container'>
              <input type={'text'} placeholder={'nome do h??bito'} onChange={e => setNameOfTheHabit(e.target.value)} />
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
          {
            myHabits.map((habit, index) =>
              <div key={habit.id} className='my-habits-container'>
                <div className='habit-name-container'>
                  <h1>
                    {habit.name}
                  </h1>
                </div>
                <div className='week'>
                  {
                    daysSymbol.map((day, index) =>
                      <div className={habit.days.includes(index) ? 'week-days selected' : 'week-days '}>
                        <h1>
                          {day}
                        </h1>
                      </div>
                    )
                  }
                </div>
                <ion-icon name="trash-outline" onClick={() => deleteHabit(habit.id)} />
              </div>)
          }
          <div className='footer-decoy' />
        </>
      </HabitsList>
    )
  }
}

const HabitsList = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 70px;
  overflow-x: none;
  background-color: #E5E5E5;


  .my-habits-container{
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 50%;
    transform: translate(-50%,0);
    margin-bottom: 10px;
    position: relative;
  }
  .my-habits-container ion-icon{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .my-habits-container h1{
    padding-left: 14px;
    padding-top: 14px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
  .habit-name-container{
    margin-bottom: 10px;
  }
  .habit-name-container h1{
    color: #666666;
  }
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
    padding: 0;
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
  .footer-decoy{
    height: 84px;
    width: 100%;
    background-color: #E5E5E5;
    margin:0;
  }
`
