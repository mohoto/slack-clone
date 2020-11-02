import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ModalAddChannel from '../channels/ModalAddChannel';
import db from '../../misc/firebase';
import {useStateValue} from '../../context/StateProvider';

export default function Sidebar() {

    const [showApp, setShowApp] = useState(false);
    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id, name: doc.data().name
            })))
        ))
    }, []);

    const [open, setOpen] = useState(false);
   
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack-clone App</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            {showApp && (
                <div>
                    <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                    <SidebarOption Icon={InboxIcon} title="Threads" />
                    <SidebarOption Icon={DraftsIcon} title="Threads" />
                    <SidebarOption Icon={BookmarkBorderIcon} title="Threads" />
                    <SidebarOption Icon={PeopleAltIcon} title="Threads" />
                    <SidebarOption Icon={AppsIcon} title="Threads" />
                    <SidebarOption Icon={FileCopyIcon} title="Threads" />
                </div>
                )}
            <SidebarOption Icon={showApp ? ExpandLessIcon : ExpandMoreIcon} title={showApp ? "Voir moins" : "Voir Plus"} expandFunc={() => setShowApp(!showApp)}/>
            <hr />
            <SidebarOption Icon={ExpandLessIcon} title="Channel" addChannelOption openModal={() => setOpen(true)} />
            <hr />
            {channels.map(channel => (
                <SidebarOption  title={channel.name} id={channel.id} />
            ))}
            <ModalAddChannel handleClose={handleClose} open={open}/>
        </div>
    )
}
