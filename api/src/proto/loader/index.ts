import path from 'path';
import grpc from 'grpc';
import { promisify } from 'util';
import protoConfig from '../../config/proto';

const protoLoader = require('@grpc/proto-loader');

export default function load({
  serviceName,
  fileName,
  address,
  credentials = grpc.credentials.createInsecure(),
}) {
  // Auto injetor do schema dos contratos
  const protoDef = protoLoader.loadSync(
    path.resolve(__dirname, '..', `${fileName}.proto`),
    protoConfig,
  );

  const proto = grpc.loadPackageDefinition(protoDef);

  const client = new proto[serviceName](address, credentials);

  // Promisify all client methods
  Object.entries(client.__proto__).map(([prop, value]) => {
    if (value.originalName !== undefined) {
      client[prop] = promisify(value);
    }
  });

  return client;
}
