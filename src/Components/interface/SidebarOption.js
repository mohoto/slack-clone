import React from 'react';
import './SidebarOption.css';
import {useHistory} from 'react-router-dom';
import {Link, Redirect} from 'react-router';

export default function SidebarOption({Icon, title, id, addChannelOption, openModal, expandFunc}) {

    const history = useHistory();

    const doClick = () => {
        if(addChannelOption) {
            openModal();
        }
        else if (expandFunc){
            expandFunc();
        }
        else if (id){
            history.push(`/chaine/${id}`); //Genre de redirect

        }
        else {
            history.push(title);
        }
    }

    return (
       /*  <Link to={{ pathname:  `/chaine/${title}`}}>
            <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
                {Icon && <Icon className="sidebarOption__icon" />}
                {Icon ? (<h3>{title}</h3>) : 
                (<h3 className="sidebarOption__channel"><span className="sidebarOption__hash">#</span>{title}</h3>)}
            </div>
        </Link> */
        <>
            <div className="sidebarOption" onClick={doClick}>
                {Icon && <Icon className="sidebarOption__icon" />}
                {Icon ? (<h3>{title}</h3>) : 
                (<h3 className="sidebarOption__channel"><span className="sidebarOption__hash">#</span>{title}</h3>)}
            </div>
        </>
    )
}
