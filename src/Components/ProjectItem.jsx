import React from "react";

export default function projectItem({project}){

    return(
        <li className="m-5 tab-item-container">
            <div className='card p-2 card_container'>
                <img src={project.imageURL} alt="img" className="w-100"/>
                <h1>{ project.title}</h1>
                <p>{ project.description }</p>
                <p> { project.category}</p>

            </div>

        </li>
    )
}