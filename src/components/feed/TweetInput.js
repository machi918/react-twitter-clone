import React, {useState} from 'react';
// import { firestore } from 'firebase-admin';
import firebase from 'firebase'
import './TweetInput.css';
import avatar from '../../assets/avatar.jpg'
import Avatar from '@material-ui/core/Avatar';
import BD from '../../services/BD';


function TweetInput() {
    const [post, setPost] = useState('');


    const handleSending = (e)=>{
        e.preventDefault();

        let name = 'Twitter clone';
        let username ='TC123';
        let profilePIC = avatar;
        let verified = true;
        let date = firebase.firestore.Timestamp.now();

        console.log(post);

        BD.collection('posts').add({
            name: name,
            username: username,
            avatar: profilePIC,
            verified: verified,
            text: post,
            image:'',
            date: date
        });

        setPost('');
    }

    return (
        <div className='tweetInput'>
            <form>
                <div className='input-box'>
                    <Avatar src={avatar} alt="Avatar"/>
                    <input type='text' name='twit' placeholder='¿Qué está pasando?' className='input' value={post} onChange={e => setPost(e.target.value)}></input>
                </div>
                <button name='Tweetear' className='button-input' onClick={(e) => handleSending(e)} type='submit'>Twittear</button>
            </form>
        </div>
    )
}

export default TweetInput
