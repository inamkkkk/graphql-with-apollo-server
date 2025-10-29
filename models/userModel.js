let users = [];
let nextId = 1;

const createUser = (username, email, password) => {
  const newUser = {
    id: nextId++,
    username,
    email,
    password, // In real-world, hash the password
  };
  users.push(newUser);
  return newUser;
};

const findUser = (username, password) => {
  return users.find(user => user.username === username && user.password === password); // In real-world, compare hashed passwords
};

module.exports = {
  createUser,
  findUser,
};
