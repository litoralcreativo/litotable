class User {
  firstName;
  lastName;
  username;
  password;
  age;
  phone;
  constructor(fname, lname, uname, pass, age, phone) {
    this.firstName = fname
    this.lastName = lname
    this.username = uname
    this.pass = pass
    this.age = age
    this.phone = phone
  }
}

const createRandomUsers = (n) => {
  let res = []
  let firstNames = ["Mario", "Luis", "Pedro", "Juan", "Pablo", "Esteban", "Ramiro", "Sebastian", "Ana", "Maria", "Julia", "Jimena", "Eloisa", "Soledad"];
  let lastNames = ["Garcia", "Jimenez", "Rolon", "Coronado", "Gomez", "Gonzales", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Diaz", "Perez"];
  let indice = 0;
  for (let i = 0; i < n; i++) {
    indice = Math.floor(Math.random() * (firstNames.length));
    const fname = firstNames[indice];
    indice = Math.floor(Math.random() * (lastNames.length));
    const lname = lastNames[indice];
    const uname = fname.split("").map((x, i) => i % 2 == 0 ? x.toLowerCase() : x.toUpperCase()).join("")
    const pass = uname.split("").map((x, i) => i % 2 == 0 ? x : Math.floor(Math.random() * (uname.length + 1))).join("")
    const age = Math.floor(Math.random() * (60)) + 18;
    const phone = Math.floor(Math.random() * (99999999999));
    res.push(new User(fname, lname, uname, pass, age, phone))
  }
  return res;
}


const controller = {
  getAll: (req, res) => {
    const users = createRandomUsers(500);
    res.json(users)
  }
}

module.exports = controller;