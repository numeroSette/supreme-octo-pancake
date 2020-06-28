import load from '../../proto/loader';

const UserClient = load({
  serviceName: 'UserService',
  address: 'localhost:3334',
  fileName: 'user',
});

export default UserClient;
