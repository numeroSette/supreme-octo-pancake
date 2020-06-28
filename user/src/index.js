const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const implementation = require('./implementation');

// Schema dos contratos de comunicação;
const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'proto', 'user_messages.proto'), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const proto = grpc.loadPackageDefinition(packageDefinition);

// Criação do server gRPC;
const server = new grpc.Server();

// Injeção dos controllers no ProtoBuffer;
server.addService(proto.UserService.service, implementation);
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());
server.start();
