import React, {Component} from 'react';

export default class Eventos2 extends Component{

    constructor(props){
        super(props);

        this.state = {
            cuenta:0
        }
    }

    incremento = (e) => {

        console.log(e.shiftKey)

        this.setState({
            cuenta: this.state.cuenta+1
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.cuenta}</h1>

                <button onClick={this.incremento}>Aumentar</button>
            </React.Fragment>
        )
    }

}