import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
import axios from 'axios';
dayjs.locale('pt')

export default function TodayHabits() {
  const userData = JSON.parse(localStorage.getItem('login'))
  let now = dayjs();
  console.log(now.format('DD/MM/YYYY'));
  const config = {
    headers: {
      Authorization: `Bearer ${userData}`
    }
  }
  const [todayHabits, setTodayHabits] = useState([])

  function markAsDone(habitId) {
    console.log('markin habit', habitId)
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId
      }/check`, config)
  }

  useEffect(() => {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
      .then((response) => {
        const { data } = response;
        setTodayHabits(data);
        console.log(response);
      });

  }, [userData]);

  return (
    <>
      <HabitsList>
        <div className='date'>
          <h1>
            {now.format('dddd, DD/MM')}
          </h1>
          <h2>
            67% dos hábitos concluídos
          </h2>
        </div>

        <MyHabitsMap />
      </HabitsList>
    </>
  )

  function MyHabitsMap() {
    console.log('today map', todayHabits)
    if (todayHabits.length !== 0) {
      return (todayHabits.map(habit =>
        <div key={habit.id} className='habit-box'>
          <div className='checkbox-info'>
            <h1>{habit.name}</h1>
            <h2>Sequência atual: {habit.currentSequence}</h2>
            <h2>Seu recorde: {habit.highestSequence}</h2>
          </div>
          <div className={`checkbox ${habit.done ? 'selected' : ''}`}
            onClick={() => markAsDone(habit.id)}
          >
            <ion-icon name="checkmark-outline" />
          </div>
        </div>
      ))
    }
  }
}

const HabitsList = styled.div`
        width: 100vw;
        height: 100%;
        margin-top: 70px;
        background-color: #E7E7E7;

        .date{
          padding-top: 28px;
        padding-bottom: 28px;
        margin-left: 50%;
        transform: translate(-50%,0);
        width: 340px;
  }
        .date h1{
          font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #126BA5;
  }
        .date h2{
          font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #8FC549;
  }

        .habit-box{
          background-color: #fff;
        width: 340px;
        height: 94px;
        border-radius: 5px;
        margin-left: 50%;
        transform: translate(-50%,0);
        position: relative;
        margin-bottom: 10px;
  }
        .checkbox{
          width: 69px;
        height: 69px;
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        top: 14px;
        right: 14px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
  }
        .checkbox ion-icon{
          font-size: 65px;
        color: #fff;
  }
        .checkbox-info{
          position: absolute;
        left: 15px;
        top: 13px;
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
  }
        .checkbox-info h1{
          font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;
  }
        .checkbox-info h2{
          font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
  }
        .selected{
          background-color: #8FC549;
  }
        `