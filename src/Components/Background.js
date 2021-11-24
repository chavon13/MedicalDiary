import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

const App = () => {

const settings = {
    canvas: {
        canvasFillSpace: true,
        width: 200,
        height: 690,
        useBouncyWalls: false
    },
    particle: {
        particleCount: 75,
        color: '#fcfcfc',
        minSize: 2,
        maxSize: 5
    },
    velocity: {
        directionAngle: 0,
        directionAngleVariance: 360,
        minSpeed: 1,
        maxSpeed: 3
    },
    opacity: {
        minOpacity: 0,
        maxOpacity: 0.5,
        opacityTransitionTime: 3000
    }
}

return <ParticleBackground className='App' settings={settings} />

}

export default App