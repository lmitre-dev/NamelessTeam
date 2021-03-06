import axios from 'axios';

const server = 'http://localhost:7000';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data)


export const register = body => request('post', '/registrar', body);
export const registrarProducto = body => request('post', '/registrarProducto', body);

export const registrarVenta = body => request('post', '/realizarVenta', body);