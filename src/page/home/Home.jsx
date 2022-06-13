import React from 'react'
import Charts from '../../component/charts/Charts'
import Featured from '../../component/featured/Featured'
import './Home.css'
import { userdata } from '../../data'
import Widget from '../../component/widget/Widget'
import WidgetL from '../../component/widgetL/WidgetL'

const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <Charts data={userdata} title='User Analytics' grid dataKey='Active User'/>
        <div className='home-widget'>
          <Widget/>
          <WidgetL/>
        </div>
    </div>
  )
}

export default Home