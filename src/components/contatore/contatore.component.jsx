import React from "react";
import "./contatore.styles.scss"

class Contatore extends React.Component {

    constructor(props) {
        super(props);

        

        this.state = {
            numero: {
                valore: 0,
                altroParametro: 'Ciao'
            },

            prova: {
                altriParametri: 'Ok'
            }
         }
    } 

    componentDidUpdate() {
        console.log('Componente aggiornato');
    }
 
    incrementa = () => {
        this.setState({
            numero: {
                ...this.state.numero,
                valore: this.state.numero.valore + 1
                }
            }
        )
            
    }

    decrementa = () => {
        if(this.state.numero.valore > 0) 
        this.setState({
            numero: {
                ...this.state.numero,
                valore: this.state.numero.valore - 1
            }
        })
    }

    render() {

        const rosso ={
            color:'#AA0000',
        }

        return(
            <div className="contatore">
                <span className={`contatore-number ${this.state.numero.valore >= 5 ? 'rosso': null}`} >{this.state.numero.valore}</span>
                {
                    (this.state.numero.valore >= 5) ? (<div style={rosso}>DIO PORCO</div>) : null
                }
                <hr />
                <div className='contatore-button-container'>
                    <button type="button" onClick={() => this.decrementa()} className="contatore-button">Decrementa</button>
                    <button type="button" onClick={this.incrementa} className="contatore-button">Incrementa</button>
                </div>
            </div>
        )
}
}

export default Contatore;
