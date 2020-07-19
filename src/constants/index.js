const base_url = 'http://localhost:1337';
const entidad = 'usuario'

export const urlUsuario = (id='') => `${ base_url }/${ entidad }/${id}`;   