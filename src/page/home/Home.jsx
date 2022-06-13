import React from 'react'
import Charts from '../../component/charts/Charts'
import Featured from '../../component/featured/Featured'
import './Home.css'
import { userdata } from '../../data'

const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <Charts data={userdata} title='User Analytics' grid dataKey='Active User'/>
    </div>
  )
}

export default Home