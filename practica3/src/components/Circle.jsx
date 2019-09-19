import React, {Component} from 'react';

export default class Circle extends Component{

    constructor(props){
        super(props);
        this.state = {
            radio: 10,
            color: "rgb(210,53,100)",
            change: false
        }
    }

    componentDidUpdate = () => {

        var red = (Math.random() * 255).toFixed(0)
        var green = (Math.random() * 255).toFixed(0)
        var blue = (Math.random() * 255).toFixed(0)

        if (this.state.change){
            this.setState({
                color: "rgb("+red+","+green+","+blue+")",
                change: false
            })
        }
    }

    incremento = (e) => {
        
        var Radioactual = this.state.radio;
        if (e.shiftKey) {
            Radioactual += 10;
        } else {
            Radioactual += 1;
        }

        this.setState({
            radio: Radioactual,
            change: true
        })
    }

    decremento = (e) => {
        var Radioactual = this.state.radio;
        if (e.shiftKey) {
            Radioactual -= 10;
        } else {
            Radioactual -= 1;
        }
        this.setState({
            radio: Radioactual,
            change: true
        })
    }

    render(){
        return(
            <React.Fragment>
                <svg height="800" width="1000">
                    <circle cx={this.state.radio} cy={this.state.radio} r={this.state.radio} fill={this.state.color} />
                </svg>
                <button onClick={this.incremento}>Aumentar</button>
                <button onClick={this.decremento}>Decrementar</button>
            </React.Fragment>
        )
    }
}