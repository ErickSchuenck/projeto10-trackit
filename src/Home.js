import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import Habits from './Habits';
import Footer from './Footer';
import Header from './Header';
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Home() {

  const [habits, setHabits] = useState([])

  return (
    <>
      <Header />
      <Habits habits={habits} />
      <Footer />
    </>
  )
}
