import React, {Component} from 'react'

export default class Inicio extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="pusher">
                <div class="ui grid">
                    <div class="wow fadeInIn row">
                        <section class="section">
                            <div class="ui container">
                                <h3>¿Como obtener tu paquete?</h3>
                                <br></br>

                                <div class="wow fadeIn" data-wow-delay="0.2s">
                                    <i class="fas fa-tools fa-3x"></i>
                                    <br></br>
                                    <p style={{color: "black"}}>Selecciona un lugar o un tipo de viaje</p>
                                    <br></br>
                                    <br></br>
                                </div>

                                <div class="wow fadeIn" data-wow-delay="0.2s">
                                    <i class="fas fa-school fa-3x"></i>
                                    <br></br>
                                    <p style={{color: "black"}}>Selecciona un presupuesto</p>
                                    <br></br>
                                    <br></br>							
                                </div>

                                <div class="wow fadeIn" data-wow-delay="0.2s">
                                    <i class="fas fa-people-carry fa-3x"></i>
                                    <br></br>
                                    <p style={{color: "black"}}>Selecciona tu tipo de transporte.</p>
                                    <br></br>
                                    <br></br>
                                </div>

                            </div>
                        </section>
                    </div>
                
                    <div class="wow fadeIn row">
                        <section id="green-section" class="section">
                            <div class="ui container">
                                    <h3>3 RAZONES PARA INVOLUCRARTE CON NOSOTROS</h3>

                                <br></br>
                                
                                <div class="wow fadeIn" data-wow-delay="0.2s">
                                    <i class="fas fa-chalkboard-teacher fa-3x"></i>
                                    <p >Armamos tu paquete de manera automática</p>
                                    <br></br>
                                    <br></br>
                                </div>

                                <div class="wow fadeIn" data-wow-delay="0.2s">
                                    <i class="fas fa-level-up-alt fa-3x"></i>
                                    <p>Aprovecha tu tiempo y tu dinero</p>
                                    <br></br>
                                    <br></br>
                                </div>
                                
                                <div class="wow fadeIn" data-wow-delay="0.2s">
                                    <i class="fas fa-globe-americas fa-3x"></i>
                                    <p>Formar parte de la red de viajeros mas grande de México</p>
                                    <br></br>
                                    <br></br>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}