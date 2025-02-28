import React from "react";
import './utente.styles.scss';

const Utente = ({id, name})=>{
	return(
	<div className='utente'>
         <span>{id}</span>
         <span>{name}</span>
    </div>
	);
};

export default Utente;