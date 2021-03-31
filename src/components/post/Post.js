import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({name, username, verified ,avatar, image, text}) {
    return (
        <div className='post'>
            <div className='post-header'>
                <Avatar src={avatar}></Avatar>
                <h4>{name} {verified ? <VerifiedUserIcon/> : "" } <span className='username'>@{username}</span></h4>
                
            </div>
            <div className='post-body'>
                <p>{text}</p>
                <img src={image == null ? '' : image}></img>
            </div>
            
        </div>
    )
}

export default Post
