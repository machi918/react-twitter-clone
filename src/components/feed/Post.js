import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className='post'>
            <div className='post-header'>
                <Avatar src=''></Avatar>
                <h4>Matias Pinto</h4>
                <h6>@pinto918</h6>
            </div>
            <div className='post-body'>
                <p>Esta es una publicacion cheta</p>
                <image src=''></image>

            </div>
            
        </div>
    )
}

export default Post
