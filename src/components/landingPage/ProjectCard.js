import React from 'react';
import '../../assets/styles/landingPageStyles.css';

const ProjectCard = (props) => {

    const { bgColor, height, width, children } = props
    return (
        <>
            <div className={'cardContainer'} style={{
                backgroundColor: bgColor, height: height,
                width: width,
            }}>
                {children}
            </div>
        </>


    )
}

export default ProjectCard