import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Typography } from '@mui/material';

import './ChildListItem.css';

export default function ChildListItem({ label, icon, onClick, active, id }) {
    const className = active && active.id === id ? 'child-list-item-active' : 'child-list-item';

    return (
        <div className={className} onClick={onClick} id={id}>
            <FontAwesomeIcon className='child-list-item-icon' icon={icon}/>
            <Typography variant="body1">{label}</Typography>
        </div>
    );
}