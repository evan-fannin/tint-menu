import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Typography } from '@mui/material';

import './NoChildrenListItem.css';

export default function NoChildrenListItem({ label, icon, onClick, active, id }) {
    const className = active && active.id === id ? 'list-item-active' : 'list-item';

    return (
        <div className={className} onClick={onClick} id={id}>
            <FontAwesomeIcon className='list-item-icon' icon={icon}/>
            <Typography variant="body1">{label}</Typography>
        </div>
    );
}
