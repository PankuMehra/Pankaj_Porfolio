import React from 'react'
import { Helmet } from 'react-helmet'
import Contacts from '../../components/container/contacts'
import Landing from '../../components/container/landing'
import Navbar from '../../components/container/navbar'
import About from '../../components/core-ui/about/about'
import Education from '../../components/core-ui/education/education'
import Skills from '../../components/core-ui/skills/skills'
import { headerData } from '../../data/headerData'
import ProjectPage from '../project'
import Github from '../../components/container/github'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Skills />
            <ProjectPage />
            <Github />
            <Education />
            {/* <Blog /> */}
            <Contacts />
        </div>
    )
}

export default HomePage
