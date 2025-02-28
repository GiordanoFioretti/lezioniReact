import React from "react";
import './WithLoading.styles.scss';

const WithLoading = (ComponenteWrappato)=>{
	


	const Caricamento = ({loading, ...altreProps}) => {
		return  loading ? (
			<div className= 'loading'></div>
		): <ComponenteWrappato {...altreProps} />;
	}

	return Caricamento;

};

export default WithLoading;