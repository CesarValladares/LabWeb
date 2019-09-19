import React, {Component} from 'react';

export default class Eventos extends Component{

    constructor(props){
        super(props);

        this.state = {
            tiempos:0
        }
    }

    cambios = () =>{
        this.setState({
            tiempos: this.state.tiempos+1
        })
    }

    componentDidMount = () =>{
        setInterval(this.cambios, 10000)
    }

    render(){

        var textStyle = {
            fontSize:72,
            fontFamily: 'sans-serif',
            color:'#56AA23',
            fontWeight: 'bold'
        }

        return(
            <React.Fragment>
                <h1 style={textStyle} onClick={this.cambios}>{this.state.tiempos}</h1>
            </React.Fragment>
        )   
    }    
}