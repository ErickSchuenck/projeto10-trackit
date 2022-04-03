import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components';
import UserDataContext from './context/UserDataContext';

export default function Header() {

  const userData = useContext(UserDataContext);
  console.log(userData)

  return (
    <HeaderBar>
      <div className='cursive-logo'>
        <h1>
          TrackIt
        </h1>
      </div>
      <img alt='user' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAkFBMVEX2vwoGBgYAAAX8xAoAAAP5wQoAAAjywSP9xQoDBAb3wQrotQ36xArvugwAAAqZeA7bqw1cSgb0wRvOoRCthwymgwi2jg7RpQ5wVww1KgqJbA0tIwkVEgp5YAyDZw0hGwnCmA5WRAu6kQ5CNAuffA8nIAsKDAeScQ10XA1XQgzfrw5NPgtoUgzGmw59YwxOOgt937SUAAADWklEQVR4nO3aC2/iOBDAcTrGOZMHhPIsjwJtgL2U9r7/tzsHWg4SNgTplt06/58qpIJGyozsSWK70QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgJK2U1jcFhDbiV13Nn8RXQa8/GMaRqhigTRQPB/1R4H59zGjcksxTp1p5VDCZ7gNm89j86qv7vdSzJ/KQEVksryfrh8PNMcDbulwdX68+Mz1k2786dsKOdxqwc7g64fi/TLNkveWV6qihtM4iJlU71bcTvpzVxuY6Kw/wA+88oiU9Z7vya644D82kdCSY53yArEL/Xld7V7qXT/VB1uVNZJOPaHmpm8VR20JxWhKXTBNbzVY+QpLwfld8R7l2fMh1WVIc246LAY625HB1a3GSCwFzR4uzu7U4gwsBz24+6phJsed4ZbdmvbxQnI6bI0cXW4hsSgMCKUSUVvM7Cwp35uaP0kli/i4850yje13tnYWFe7mkpeNAjwoBAzdnlRU9nScr116zzTwX8ObmI2BGx+3TZGV3NSI6m1iyCBztOBkVL756bEtk3rg6DnS0OzZlaT65XBubbGMyk4OnCmtdlhlOPwMWndtWnr8hEwzn3e5u2wsrZqoa75Ndt/vxEil3G86RNtYtq+Va3RgAAAAAAACA/5u55SSJcXOT8yd08E+/UXGPRZvg40eNFrp8fyUyTQJzPWdbmo4nsnN+9fhIZQe2srOzPVW6LOyHJn6eZbsPMq7B8vFe+HkKUkTW25EJL68O69BE/Tf5Ome7q0d1/MZxZy87rt0e99NIG6W1b/8s+xkqP4qTlZ1Px5NdsnV2H/iMPj1bbMdPU2bdj2Q5itMgk8bvg+dVtrt1cuZNFqOadB3Vy++ZZ7z2ZrFeL2bt9v7f8993bu91nvL9rVc8C9n63NnMf2+/eqnDft6RSbvFKlzUFG/yWI9+c+Sb97cK5bGzbZ6aOg2bA+2/r5ql9bHzrD1JKzwqukir+KN9ocl8dRp5tS8Z9SxNRit/OV57uTa878ybtyQ2bp5Wr06baJSMX/f376ZlH3va0+5kmXKuYk8r0wjSZT/pbDvJ4CUOIvtKUb8m/HNaa3Wg6/MGDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4JbH330Bf7L6Fefxr+r+BYB7Jr90dqVtAAAAAElFTkSuQmCC' />
    </HeaderBar>
  )
}

const HeaderBar = styled.div`
  z-index: 9999999;
  height: 70px;
  background-color: #126BA5;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  overflow-x: none;

  img{
    border-radius: 50%;
    width: 51px;
    height: 51px;
    margin-right: 18px;
  }
  h1{
    font-family: Playball;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin-left: 18px;
  }
`