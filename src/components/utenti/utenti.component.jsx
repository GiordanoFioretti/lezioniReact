import React from "react";
import Utente from "../utente/utente.component";
import "./utenti.styles.scss";

const Utenti = ({users}) => {
return(
     <div className="utenti">
            {
                users.map((valore)=>(
                <Utente id = {valore.id} name = {valore.name} key = {valore.id}/>
                ))
            }
        </div>
         );
    }


export default Utenti;