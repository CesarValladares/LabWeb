import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { action_edit_data } from '../actions/editdata'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import { Redirect } from "react-router-dom";



const mapear = dispatch => ({
  action_edit_data: (user) => dispatch(
      action_edit_data(user)
    )
})

const mapearEstado = state =>({
  ...state
})

class Usuarios extends Component{
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
    
    componentDidMount= () =>{
        console.log("USERS",this.props)
    }

    RedirectToAgregar = () =>{
        this.setState({
            redirect: !this.state.redirect
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.redirect && <Redirect to="/Datos"/>}
                <h1>Usuarios</h1>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong><h2>Nombre</h2></strong></TableCell>
                        <TableCell align="right"><strong><h2>Dirección</h2></strong></TableCell>
                        <TableCell align="right"><strong><h2>Edad</h2></strong></TableCell>
                        <TableCell align="right"><strong><h2>Nacionalidad</h2></strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell>Prueba Nombre</TableCell>
                    <TableCell align="right">Prueba Dirección</TableCell>
                    <TableCell align="right">Prueba Edad</TableCell>
                    <TableCell align="right">Prueba Nacionalidad</TableCell>
                    </TableRow>
                    {this.props.users.map((entity, index) => {
                        return (
                            <TableRow>
                            <TableCell>{entity.name}</TableCell>
                            <TableCell align="right">{entity.direc}</TableCell>
                            <TableCell align="right">{entity.age}</TableCell>
                            <TableCell align="right">{entity.nat}</TableCell>
                            </TableRow>
                        )
                    })
                    }
                </TableBody>
                </Table>
                <Button variant="contained" color="primary" onClick={this.RedirectToAgregar}>Agregar</Button>
            </React.Fragment>
        )
    }
} 

export default connect (mapearEstado, mapear)(Usuarios);