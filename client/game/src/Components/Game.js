import React from 'react'
import map from '../Assets/map.png'
import mario from '../Assets/mario-running-gif-1.gif'
import Background from './Background'
import Character from './Character';
import { Link } from 'react-router-dom'

const FRAMES_PER_SECOND = 60

class Game extends React.Component{


    state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        spriteWidth: 100,
        spriteHeight: 100,
        playerX: 300,
        playerY: 543,
        speedX: 0,
        gravity: 0.05,
        gravitySpeed: 0,
        playerVelocityY: 0,
        windowLeft: 0,
        windowTop: 0
    }
    
    jump = (e)=>{
        if (e.key === ' '){
            // console.log ('spacebar event')
            // console.log(this.state.playerY)
            if(this.state.playerY === 543){
                // console.log ('jumppp')
                this.setState({
                    playerVelocityY: 6.5
                })
            }
        }
    }
    // pullDown = ()=>{
    //     if (this.state.playerY < 543){
    //         this.setState({
    //             playerY: this.state.playerY + 2
    //        })}
        
    // }
    jumpCalc = () =>{
        let currY
        let currYVel
        currY = this.state.playerY
        currYVel = this.state.playerVelocityY
        if (this.state.playerVelocityY > 0){
            currY = this.state.playerY - this.state.playerVelocityY
            currYVel = this.state.playerVelocityY - this.state.gravity
            console.log({playerY: currY, playerVelocityY: currYVel})
        }
        if (this.state.playerY < 543 && this.state.playerVelocityY <= 0){
            currY = this.state.playerY + 2.5
        }
        if(this.state.playerY > 543){
            currY = 543
            currYVel = 0
        }
        
        return({playerY: currY, playerVelocityY: currYVel})
    }
       

    gameLoop = () => {
       let numbers = this.jumpCalc()
        console.log(numbers)
        this.setState({playerY: numbers.playerY, playerVelocityY: numbers.playerVelocityY})
        if(this.state.windowLeft > -6560){
            this.setState({windowLeft: this.state.windowLeft-2})
        }
    }

    updateWindowDimensions = () => {
        this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
    }

    componentDidMount = () => {
    
        window.addEventListener('keydown', (e)=>{this.jump(e)}) 
        this.halfWidth = this.state.spriteWidth / 2;
        this.halfHeight = this.state.spriteHeight / 2
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
        this.gameInterval = setInterval(this.gameLoop, FRAMES_PER_SECOND / 1000)
    }

    componentWillUnmount = () => {//useful if have a button to main menu after race
        window.removeEventListener('resize', this.updateWindowDimensions)
        clearInterval(this.gameInterval)

    }

    render(){
        
        return(
            <div>
                <Character charImg={mario} centreX={this.state.playerX} centreY={this.state.playerY} width={this.state.spriteWidth} height={this.state.spriteHeight}/>
                <Background map={map} windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight} windowLeft={this.state.windowLeft}/>
            </div> 
        )
    }
}

export default Game