import React,{ Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { action_edit_data } from '../actions/editdata'
import { Redirect } from "react-router-dom";

const mapear = dispatch => ({
  action_edit_data: (user) => dispatch(
      action_edit_data(user)
    )
})

const mapearEstado = state =>({
  ...state
})

class Datos extends Component{
    constructor(props){
        super(props)

        this.state = {
            user:{
                name: '', 
                direc: '',
                age: '',
                nat: ''
            },
            redirect: false
        }
    }

    guardar = () =>{
        this.props.action_edit_data(this.state.user)
        this.setState({
            redirect:true
        })
    }

    atras = () => {
        this.setState({
            redirect:true
        })
    }

    handlerName = (event) => {
        let temp_user = this.state.user
        temp_user['name'] = event.target.value
        this.setState({
            user:temp_user
        })
    }
    handlerDirec = (event) => {
        let temp_user = this.state.user
        temp_user['direc'] = event.target.value
        this.setState({
            user:temp_user
        })
    }
    handlerAge = (event) => {
        let temp_user = this.state.user
        temp_user['age'] = event.target.value
        this.setState({
            user:temp_user
        })
    }
    handlerNat = (event) => {
        let temp_user = this.state.user
        temp_user['nat'] = event.target.value
        this.setState({
            user:temp_user
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.redirect && <Redirect to="/usuarios"/>}
                <h1>Datos de usuario</h1>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        onChange = {this.handlerName}
                        value= {this.state.name}
                        margin="normal"
                    />
                </form>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Dirección"
                        onChange = {this.handlerDirec}
                        value= {this.state.name}
                        margin="normal"
                    />
                </form>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Edad"
                        onChange = {this.handlerAge}
                        value= {this.state.name}
                        margin="normal"
                    />
                </form>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Nacionalidad"
                        onChange = {this.handlerNat}
                        value= {this.state.name}
                        margin="normal"
                    />
                </form>
                <Button variant="contained" color="primary" onClick={this.guardar}>Guardar</Button>
                <Button variant="contained" color="primary" onClick={this.atras}>Atrás</Button>
            </React.Fragment>
        )
    }
} 

export default connect (mapearEstado, mapear)(Datos);