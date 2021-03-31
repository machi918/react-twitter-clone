import React, {useState, useEffect} from 'react';
import './Feed.css';
import Header from './Header';
import TweetInput from './TweetInput';
import Post from '../post/Post';
import BD from '../../services/BD'



function Feed() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        BD.collection('posts').orderBy('date','desc').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))
        });
    }, []) //[] corré cuando el feed carga, corré el codigo y no lo vuelvas a cargar.
            //Cada vez que algo se modifica, agarra ese snapshot y lo updatea

    return (
        <div className='feed'>
            <Header className='header'/>
            <TweetInput/>

            {posts.map((post) =>{
                return(
                    <Post
                    name={post.name}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}/>
                )
            })}
        

        </div>
    )
}

export default Feed
