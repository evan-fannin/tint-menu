import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Typography } from '@mui/material';

import './ChildrenListItem.css';
import { useEffect, useState } from 'react';
import ChildListItem from './ChildListItem';

export default function ChildrenListItem({ label, icon, onClick, children, active, id }) {
    const [activeChild, setActiveChild] = useState();

    useEffect(() => {
        if (!active || active.id !== id) {
            setActiveChild(null);
        }
    }, [active, id]);

    const handleClick = (e) => {
        e.preventDefault();

        if (e.currentTarget === activeChild) {
            setActiveChild(null);
        }

        else {
            setActiveChild(e.currentTarget);
        }
    }

    if (active && active.id === id) {
        return (
            <div id={id}>
                <div className="list-item-active" onClick={onClick}>
                    <FontAwesomeIcon className='list-item-icon' icon={icon}/>
                    <Typography variant="body1">{label}</Typography>
                    <FontAwesomeIcon className='right-chevron' icon={faChevronDown} />
                </div>
                <div className='child-list'>
                    {children.map((link, i) => {
                        return (
                            <ChildListItem
                            key={link.label}
                            label={link.label}
                            icon={link.icon}
                            onClick={(e) => handleClick(e)}
                            active={activeChild}
                            id={link.label + "-child-menu-item-" + i}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="list-item" id={id} onClick={onClick}>
                <FontAwesomeIcon className='list-item-icon' icon={icon}/>
                <Typography variant="body1">{label}</Typography>
                <FontAwesomeIcon className='right-chevron' icon={faChevronRight} />
            </div>
        );
    }
}