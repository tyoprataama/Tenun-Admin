import React from 'react'
import Charts from '../../component/charts/Charts'
import Featured from '../../component/featured/Featured'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <Charts/>
    </div>
  )
}

export default Home