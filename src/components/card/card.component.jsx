import React from "react";
import Contatore from "../contatore/contatore.component";
import Utenti from "../utenti/utenti.component";
import WithLoading from "../WithLoading/WithLoading.component";
import "./card.styles.scss"

const UtentiWithLoading = WithLoading(Utenti);

class Card extends React.Component {
   
   constructor(props) {
      super(props);

      this.state = {
         users: [],
         loading: true
      }
   }
   
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(values =>{
          this.setState({
              users: values,
              loading: false
          })
      });
   }
   
   render(){
      const { testo } = this.props;
      return (
     <div className="card">
       {testo}
       <hr />
       <Contatore />
       <br />
      <UtentiWithLoading users={this.state.users} loading = {this.state.loading} />
    </div>
       )
   }
}
export default Card;