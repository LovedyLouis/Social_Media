import React from 'react'
//import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
//import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <div className='postside'>Postside</div>
        <div className='rightSide'>rightSide</div>
        
    </div>
  )
}

export default Home