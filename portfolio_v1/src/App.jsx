import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Section from './components/Section.jsx'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'

function App() {

  return (
    <>
    <div className ='main-body'>
      <NavBar />
      <Section id='home' title='' > 
        <Home />
      </Section>
      <Section id='aboutme' title='About Me'>
        <AboutMe />
      </Section>
      <Section id='skills' title='Skills'>
        <Skills />
      </Section>
      <Section id='experience' title='Experience'>

      </Section>
      <Section id='projects' title='Projects'
      ></Section>
      <Section id='links' title='Contact Information'>

      </Section>
      <Section id='resume' title='My Resume'>
        
      </Section>
    </div>
    </>
  )
}

export default App
