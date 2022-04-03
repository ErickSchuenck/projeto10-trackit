import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import Habits from './Habits';
import Footer from './Footer';
import Header from './Header';
import TodayHabits from './TodayHabits'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Today() {

  const [habits, setHabits] = useState([])

  return (
    <>
      <Header />
      <TodayHabits />
      <Footer />
    </>
  )
}
