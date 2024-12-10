/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');
const routes = require('./routes.js');

const jalan = async () => {
  const server = Hapi.Server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server ini berjalan pada ${server.info.uri}`);
};
jalan();
