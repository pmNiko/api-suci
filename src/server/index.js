/*
  -- Archivo principal de la API ---
*/

import server from "./server";

server.start({ port: 3200 }, ({ port }) => {
  console.log("Server corriendo en el puerto: ", port);
});
