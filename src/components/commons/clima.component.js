import React, { useEffect, useState } from "react"
import { SyncLoader } from 'react-spinners';

// REDUX
import { connect } from 'react-redux';
import { obtenerClimaActual } from '../../redux/actions/clima.actions';

const transformaCelcius = kelvin => ((parseFloat(kelvin)-32) / 1.8);

const Clima = ({obtenerClimaActual, ciudad, condicion, pronostico, viento, codigo, listaBanderas, buscandoClima, buscandoBanderas }) => {
  const [coordenadas, setCoordenadas] = useState({
    latitud: null,
    longitud: null,
  })
  let geoId

  useEffect(() => {
    geoId = window.navigator.geolocation.watchPosition(position => {
      setCoordenadas({
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      })
    })
    return () => {
      navigator.geolocation.clearWatch(geoId)
    }
  },[])


  useEffect(()=>{
    obtenerClimaActual(coordenadas.latitud, coordenadas.longitud);
  },[coordenadas])

  if (buscandoClima && buscandoBanderas) return <SyncLoader />
   const banderaImagen = listaBanderas.find(bandera =>  bandera.code === codigo);
   console.log(banderaImagen);
  return(
    <div className="d-flex flex-row justify-content-end">
      <div className="d-flex flex-column">
        <small><b>Ciudad:</b> {ciudad}</small>
        <small><b>Condición:</b> {condicion}</small>
        <small><b>Pronostico:</b> {pronostico}</small>
        <small><b>Viento:</b> {viento} m/h</small>
      </div>
      <div className="d-flex flex-column justify-content-center">
        { banderaImagen && <img src={banderaImagen.flag} width="100" height="80" className="rounded border border-dark img-fluid ml-3" alt={banderaImagen.nombre}></img> }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { ciudad, condicion, pronostico, viento, codigo, buscandoClima } = state.clima;
  const { listaBanderas, buscandoBanderas } = state.banderas;
  return {
    ciudad,
    condicion,
    pronostico,
    viento,
    codigo,
    buscandoClima,
    listaBanderas,
    buscandoBanderas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    obtenerClimaActual: (latitud, longitud) => obtenerClimaActual(dispatch, latitud, longitud)
  }
}


Clima.displayName = 'Clima';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clima);
