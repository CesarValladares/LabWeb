import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Button from '@material-ui/core/Button';
import Respuesta from './Respuesta';



export default class Paquete extends Component {
    constructor(props){
        super(props);

        this.state = {
            lugar: '',
            pais: '',
            transporte: '',
            date: '',
            retDate: '',
            budget: 0,
            genPaq: false
        }
    }

    componentDidUpdate = () =>{
        console.log(new Date().getMonth())
    }

    useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
    }));

    handleChangePlace = (event) =>{
        console.log(event.target)
        this.setState({
            lugar: event.target.value
        })
    }

    handleChangePais = (event) =>{
        console.log(event.target)
        this.setState({
            pais: event.target.value
        })
    }

    handleChangeTransp = (event) =>{
        console.log(event.target)
        this.setState({
            transporte: event.target.value
        })
    }

    handleDateChange = (event) => {
        console.log(event.target.value);
        this.setState({
            date: event.target.value
        })
    }

    handleBudgetChange = (event) => {
        console.log(event.target.value);
        this.setState({
            budget: event.target.value
        })
    }
 
    handleFinalDateChange = (event) => {
        console.log(event.target.value);
        this.setState({
            retDate: event.target.value
        })
    }

    generarPaquete = () => {
        
        if (this.state.lugar !== '' || this.state.pais !== '' || this.state.transporte !== '' || this.state.retDate !== '' || this.state.date !== '' || this.state.budget > 0){
            this.setState({
                genPaq: true
            }, () =>{
                console.log(this.state)
            })
        }
        else {
            alert("Rellena todos los campos")
        }
    }

    render(){

        var formStyle = {
            position: "flex",
            left: "0px",
            margin: "5px",
            width:  100
        }
        var dateStyle = {
            position: "flex",
            left: "0px",
            margin: "auto",
            marginTop: "20px",
            width:  200
        }
        var buttonStyle ={
            margin: "20px"
        }

        return(
            <React.Fragment>
                <h1>Selecciona tu paquete</h1>
                <form >
                    <FormControl style={formStyle}>
                        <InputLabel htmlFor="age-simple">Lugar</InputLabel>
                        <Select 
                        value={this.state.lugar}
                        onChange={this.handleChangePlace}
                        inputProps={{
                            name: 'lugar'
                           
                        }}>
                            <MenuItem value={"Playa"}>Playa</MenuItem> 
                            <MenuItem value={"Montaña"}>Montaña</MenuItem>
                            <MenuItem value={"Pueblo"}>Pueblo Mágico</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={formStyle}>
                        <InputLabel htmlFor="age-simple">Pais</InputLabel>
                        <Select 
                        value={this.state.pais}
                        onChange={this.handleChangePais}
                        inputProps={{
                            name: 'pais'
                        }}>
                            <MenuItem value={"México"}>México</MenuItem> 
                            <MenuItem value={"Canadá"}>Canadá</MenuItem>
                            <MenuItem value={"España"}>España</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={formStyle}>
                        <InputLabel htmlFor="age-simple">Tansporte</InputLabel>
                        <Select 
                        value={this.state.transporte}
                        onChange={this.handleChangeTransp}
                        inputProps={{
                            name: 'transporte'
                        }}>
                            <MenuItem value={"Avión"}>Avión</MenuItem>
                            <MenuItem value={"Ninguno"}>Ninguno</MenuItem>
                        </Select>
                    </FormControl>
                    <div style={dateStyle}>
                        <InputLabel htmlFor="age-simple">Fecha inicio</InputLabel>
                        <input type="date" onChange={this.handleDateChange} ></input>
                    </div>
                    <div style={dateStyle}>
                    <InputLabel htmlFor="age-simple">Fecha Regreso</InputLabel>
                        <input type="date" onChange={this.handleFinalDateChange} ></input>
                    </div>
                    <div style={dateStyle}>
                    <InputLabel htmlFor="age-simple">Presupuesto</InputLabel>
                        <input type="number" onChange={this.handleBudgetChange} ></input>
                    </div>
                </form>
                <Button variant="contained" color="primary" style={buttonStyle} onClick={this.generarPaquete}>
                    Generar
                </Button>
                {this.state.genPaq &&
                    <Respuesta data={this.state}/>
                }
            </React.Fragment>
        )
    }
}