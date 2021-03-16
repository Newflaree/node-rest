const { request, response } = require( 'express' );

const getUsers = ( req = request, res = response ) => {
  const { nombre, api_key } = req.query;

  res.json({
    ok: true,
    msg: 'get API',
    nombre,
    api_key
  });
}

const postUser = ( req = request, res = response ) => {
  const { nombre, edad } = req.body;

  res.json({
    ok: true,
    msg: 'post API',
    nombre,
    edad
  });
}

const putUser = ( req = request, res = response ) => {
  const { id } = req.params;

  res.json({
    ok: true,
    msg: 'put API',
    id
  });
}

const patchUser = ( req = request, res = response ) => {
  res.json({
    ok: true,
    msg: 'patch API'
  });
}

const deleteUser = ( req = request, res = response ) => {
  const { id } = req.params;

  res.json({
    ok: true,
    msg: 'delete API',
    id
  });
}

module.exports = {
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser
}
