import React from 'react';
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TocIcon from '@material-ui/icons/Toc';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const Sidebar = (() => {
    return (
        <div className='sidebar'> 
            {<TwitterIcon/>}
            <SidebarOption text='Home' Icon={HomeIcon}/>
            <SidebarOption text='Explorar' Icon={SearchIcon}/>
            <SidebarOption text='Notificaciones' Icon={NotificationsIcon}/>
            <SidebarOption text='Mensajes' Icon={ChatIcon}/>
            <SidebarOption text='Listas' Icon={TocIcon}/>
            <SidebarOption text='Elementos guardados' Icon={BookmarksIcon}/>
            <SidebarOption text='Momentos' Icon={FlashOnIcon}/>

            <button className='tweet-button'>
                <span>Tweetear</span>
            </button>

            
            
        </div>
    )
});

export default Sidebar
