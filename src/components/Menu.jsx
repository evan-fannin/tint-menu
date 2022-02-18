import { useState } from "react";
import NoChildrenListItem from './NoChildrenListItem';
import ChildrenListItem from "./ChildrenListItem";
import './Menu.css';

export default function Menu({ links }) {
    const [active, setActive] = useState();

    const handleClick = (e) => {
        e.preventDefault();

        if (e.currentTarget === active) {
            setActive(null);
        }

        else {
            setActive(e.currentTarget);
        }
    }

    return(
        <div className="menu">
            <div className="title-div">
                <h1>
                    <img src='https://uploads-ssl.webflow.com/61caeefd5b7c5abfa949aa7c/61cc4614a234926cbca41c81_Tint%20Logo.png'
                    alt='tint logo'
                    />
                </h1>
            </div>
            <div className="link-list">
                {links.map((link, i) => {
                    return (link.children ? (
                        <ChildrenListItem 
                        id={"menu-item-" + i}
                        active={active}
                        children={link.children}
                        key={link.label} 
                        label={link.label} 
                        icon={link.icon}
                        onClick={(e) => handleClick(e)}
                        />
                    ) : (
                        <NoChildrenListItem
                        active={active}
                        id={"menu-item-" + i}
                        key={link.label} 
                        label={link.label} 
                        icon={link.icon}
                        onClick={(e) => handleClick(e)}
                        />
                    ));
                })}                    
            </div>
        </div>
    );
}