import React from 'react'
import {Link} from 'react-router-dom'

class MainMenu extends React.Component{
    render(){
        return(
            <div>
                <h1>Main Menu</h1>
                <Link to="in-game">Start Game</Link>
            </div>
        )
    }
}

export default MainMenu