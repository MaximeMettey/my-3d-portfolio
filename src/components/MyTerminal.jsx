import React, { Component } from 'react'
import { SectionWrapper } from '../hoc'
import Terminal from 'react-console-emulator'

const commands = {
    echo: {
        description: 'Echo a passed string',
        usage: 'type "echo <string>"',
        fn: (...args) => args.join(' ')
    },
    bio: {
        description: 'A short bio of Maxime Mettey.',
        fn: () => {
            return 'This is my bio';
        }
    },
    cv: {
        description: 'See his full CV from this terminal. Not the easiest way to check his resume, but if you like to be a nerd, go ahead.',
        fn: () => {
            return 'Bio';
        }
    },
    experience: {
        description: 'Check which jobs he had before today.',
        fn: () => {
            return 'Experiences';
        }
    },
    skills: {
        description: 'Know more about him and find out what are his hobbies.',
        fn: () => {
            return 'Skills';
        }
    },
    hobbies: {
        description: 'Part of his CV - Know more about hime and find out what are his hobbies.',
        fn: () => {
            return 'Hobbies';
        }
    },
    music: {
        description: 'You want to know what is his current favourite music and listen it on Spotify.',
        fn: () => {
            return 'My favourite music is';
        }
    },
}

const MyTerminal = (props) => {

    return (
        <Terminal
            commands={commands}
            // welcomeMessage={true}
            // welcomeMessage={'This is Maxime\'s assistant. He is a busy man, so we if you need some information, please ask me directly ! Type "help" to show a list of available commands.'}
            promptLabel={'you@cleverAssistant:~$'}
            style={{ backgroundColor: '#000000' }}
            promptLabelStyle={{ color: '#915eff' }}
            inputTextStyle={{ color: '#fff', fontFamily: 'Poppins' }}
            messageStyle={{ color: 'yellow', fontStyle: 'italic', fontSize: '12px' }}
        />

    )
}

export default SectionWrapper(MyTerminal, "terminal")