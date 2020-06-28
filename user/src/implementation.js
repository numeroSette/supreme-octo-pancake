module.exports = {
  getUserById(call, callback) {
    const { id } = call.request;

    const user = {
      id,
      username: 'Leonardo1',
      email: 'leonardofelipegrandi@gmail.com',
      password: '123456'
    };

    callback(null, { user });

  },
  registerUser(call, callback) {
    const { email, username, password } = call.request.user;

    const user = {
      id: 1233121,
      email,
      username,
      password
    };

    callback(null, { user });
  },

  loginUser(call, callback) {
    const { email, password } = call.request.user;
  }
}