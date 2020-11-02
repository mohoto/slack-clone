import React from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from '../../context/StateProvider';

export default function Header() {

    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <Avatar alt={user?.displayName} src={user?.photoURL} />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder="recherche" />
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
            </div>
            
        </div>
    )
}
