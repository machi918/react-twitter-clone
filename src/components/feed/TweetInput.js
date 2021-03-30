import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import './TweetInput.css';
import avatar from '../../assets/avatar.jpg'

function TweetInput() {
    return (
        <div className='tweetInput'>
            <form>
                <div className='input-box'>
                    <Avatar src={avatar} alt="Avatar"/>
                    <input type='textarea' required placeholder='¿Qué está pasando?'></input>
                    <button name='Tweetear'>Tweetear</button>

                </div>
            </form>
            
            
            
        </div>
    )
}

export default TweetInput
