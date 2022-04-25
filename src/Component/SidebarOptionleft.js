import React from 'react'
import '../component_css/sidebarOptionleft.css';
function SidebarOptionleft({ Icon, title, number }) {
    return (
        <div className="sidebarOptionleft">
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptionleft
