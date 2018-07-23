import http from 'http';
import app from '../app';
/*
  Code for simple server run, largely taken from a medium article
*/


// Logging function
function log(msg) {
  process.stdout.write(`${msg}\n`);
}

// Normalize the port param to a string or number, used when we do not want to run the app on 3000
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// Retrieve port from env and save in Express
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

// Create serverPort
const server = http.createServer(app);
let availablePort = port;

// Start the server on the given port

function startServer(usedPort) {
  server.listen(usedPort);
}

// Error listener

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = `$(
    typeof port === 'string' ? 'Pipe' : 'Port'
  )${port}`;

  // Better error messages
  switch (error.code) {
    case 'EACCES':
      log(`${bind} requires elevated priveleges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log(`Port ${availablePort} is not available, trying another`);
      if (availablePort - port < 10) {
        availablePort += 1;
        startServer(availablePort);
      } else {
        log(`${bind} is already in use`);
        process.exit(1);
      }
      break;
    default:
      throw error;
  }
}

// Event listener
function listening() {
  const address = server.address();
  const bind = `${
    typeof address === 'string' ? 'Pipe' : 'port'
  } ${
    typeof address === 'string' ? address : address.port
  }`;
  log(`Server is listening on ${bind}`);
  log(`Visit: http://localhost:${address.port}`);
}

// Start the server

server.on('error', onError);
server.on('listening', listening);
startServer(availablePort);
