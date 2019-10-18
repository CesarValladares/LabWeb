import React, {Component} from 'react';

export default class Historial extends Component{
    constructor(props){
        super(props);
    }
    
    render(){

        var DIVstyle = {
            "borderStyle": "solid",
            "borderWidth": "5px"
        }

        return(
            <React.Fragment>
                <div style ={DIVstyle}>
                    <h1>Lugar visitado:</h1>
                    <h2>Playa</h2>
                    <h1>Pais visitado:</h1>
                    <h2>Puerto Rico</h2>
                    <h1>Viajando por:</h1>
                    <h2>Avion</h2>
                    <h1>Costo total:</h1>
                    <h2>$9,500</h2>
                </div>
                <div style ={DIVstyle}>
                    <h1>Lugar visitado:</h1>
                    <h2>Montaña</h2>
                    <h1>Pais visitado:</h1>
                    <h2>Canadá</h2>
                    <h1>Viajando por:</h1>
                    <h2>Avion</h2>
                    <h1>Costo total:</h1>
                    <h2>$10,500</h2>
                </div>
                <div style ={DIVstyle}>
                    <h1>Lugar visitado:</h1>
                    <h2>Playa</h2>
                    <h1>Pais visitado:</h1>
                    <h2>México</h2>
                    <h1>Viajando por:</h1>
                    <h2>Ninguno</h2>
                    <h1>Costo total:</h1>
                    <h2>$5,800</h2>
                </div>
            </React.Fragment>
        )
    }
}