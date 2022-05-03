import bcrypt from "bcryptjs";

const users = [
  {
    name: "HANFI Hamza",
    email: "hamza@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "HANFI youness",
    email: "younes@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "HANFI Adnane",
    email: "adnane@example.com",
    password: bcrypt.hashSync("12456", 10),
  },
];

export default users;
