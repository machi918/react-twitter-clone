import React from 'react';
import './Feed.css';
import Header from './Header';
import TweetInput from './TweetInput';
import Post from './Post';


function Feed() {
    return (
        <div className='feed'>
            <Header/>
            <TweetInput/>
            
            <Post/>
            <Post/>

            <Post/>


        </div>
    )
}

export default Feed
