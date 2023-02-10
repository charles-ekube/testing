import React, { useState } from 'react'
import ProjectCard from '../components/landingPage/ProjectCard'
import { cardDetails } from '../Helper'
import Navbar from '../widgets/Navbar'

const LandingPage = () => {


    const [state, setState] = useState({
        logoColor: false, openMobileNav: false, showLogin: false
    })

    const toggler = () => {
        if (state.logoColor) {
            setState((prevState) => ({ ...prevState, logoColor: false }))
        } else {
            setState((prevState) => ({ ...prevState, logoColor: true }))
        }
    }

    const BgColor = (index) => {
        switch (index) {
            case 0:
                return 'red'
            case 1:
                return 'blue'
            case 2:
                return 'green'
            case 3:
                return 'yellow'
            case 4:
                return 'black'
            default:
                break;
        }
    }

    const renderProjects = () => {
        if (cardDetails?.length !== 0) {
            return cardDetails?.map((item, index) => {
                return <ProjectCard key={index} bgColor={BgColor(index)}>
                    <p>{item?.name}</p>
                </ProjectCard>
            })
        }
    }




    return (
        <>
            <Navbar logoColor={state.logoColor} toggler={toggler} />
            <main>
                <section>
                    {renderProjects()}
                </section>
            </main>
        </>
    )
}

export default LandingPage