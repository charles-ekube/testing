import React, { useState } from 'react';
import '../assets/styles/widgetStyles.css';

const Navbar = (props) => {
    const { logoColor, toggler } = props
    return (
        <nav className={'navContainer'}>
            <section className={logoColor ? 'navLeftActive' : 'navLeft'}>
                <h1>GROUP 15</h1>
            </section>
            <section className={'navRight'}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>
                        <button onClick={toggler}>Toggle</button>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar