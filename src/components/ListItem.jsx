import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Typography } from '@mui/material';

import './ListItem.css';

export default function ListItem({ label, icon, onClick, children, active, id }) {
    if (children && active && active.id === id) {
        return (
            <div>
                <div className="list-item" id={id} onClick={onClick}>
                    <FontAwesomeIcon className='list-item-icon' icon={icon}/>
                    <Typography variant="body1">{label}</Typography>
                    <FontAwesomeIcon className='right-chevron' icon={faChevronRight} />
                </div>
                <div>
                    <div>Hello</div>
                </div>
            </div>
        );
    }

    else if (children) {
        return (
            <div className="list-item" id={id} onClick={onClick}>
                <FontAwesomeIcon className='list-item-icon' icon={icon}/>
                <Typography variant="body1">{label}</Typography>
                <FontAwesomeIcon className='right-chevron' icon={faChevronRight} />
            </div>
        );
    }

    return (
        <div className="list-item" id={id} onClick={onClick}>
            <FontAwesomeIcon className='list-item-icon' icon={icon}/>
            <Typography variant="body1">{label}</Typography>
        </div>
    );
}
