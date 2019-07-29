import React from 'react'

class Background extends React.Component{

   

    render(){

        let bgStyle = {
            height: `calc(${this.props.windowHeight}px)`, 
            top: 0,
            left: parseInt(`${this.props.windowLeft}`),
            position: 'absolute' ,
            zIndex: 0       
        };
        return <img alt=' ' src={this.props.map} style={bgStyle}/>
    }

}

export default Background