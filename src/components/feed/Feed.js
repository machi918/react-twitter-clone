import React from 'react';
import './Feed.css';
import Header from './Header';
import TweetInput from './TweetInput';
import Post from '../post/Post';
import avatar from '../../assets/avatar.jpg'


function Feed() {






    return (
        <div className='feed'>
            <Header className='header'/>
            <TweetInput/>
            
            <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
                        <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
                        <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
                        <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
                        <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
                        <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
                        <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
                        <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>
                        
            <Post
            name='Matias'
            username='pinto918'
            verified={true}
            text='Este es un twit'
            avatar={avatar}/>


        </div>
    )
}

export default Feed
