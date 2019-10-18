import React, {Component} from 'react';
import xcaret from './xcaret.jpg'
import afterlife from './afterlife.jpg'

export default class Respuesta extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <React.Fragment>
                <h1>Irás a: {this.props.data.lugar}</h1>
                <h1>En: {this.props.data.pais}</h1>
                <h1>Llegando por: {this.props.data.transporte}</h1>
                {this.props.data.budget > 5000 &&
                    <h1>Estas dentro de tu presupuesto</h1>
                }
                {this.props.data.budget < 5000 &&
                    <h1>Esta fuera de tu presupuesto</h1>
                }
                <h1>Componente de Eventos</h1>
                <img src={afterlife}/>
                <h1>Componente Lugares de interes</h1>
                <img src={xcaret}/>

            </React.Fragment>
        )
    }
}