class User {
  firstName;
  lastName;
  username;
  password;
  age;
  phone;
  cuit;
  salary;
  constructor(fname, lname, uname, pass, bday, phone, cuit, salary) {
    this.firstName = fname
    this.lastName = lname
    this.username = uname
    this.pass = pass
    this.bday = bday
    this.phone = phone
    this.cuit = cuit
    this.salary = salary
  }
}

const createRandomUsers = (n) => {
  let res = []
  let firstNames = ["Mario", "Luis", "Pedro", "Juan", "Pablo", "Esteban", "Ramiro", "Sebastian", "Ana", "Maria", "Julia", "Jimena", "Eloisa", "Soledad"];
  let lastNames = ["Garcia", "Jimenez", "Rolon", "Coronado", "Gomez", "Gonzales", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Diaz", "Perez"];
  let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let indice = 0;
  const now = new Date();
  for (let i = 0; i < n; i++) {
    indice = Math.floor(Math.random() * (firstNames.length));
    const fname = firstNames[indice];
    indice = Math.floor(Math.random() * (lastNames.length));
    const lname = lastNames[indice];
    let randstr = ''
    let jlen = Math.floor(Math.random() * 2 + 3);
    for (let j = 0; j < jlen; j++) {
      indice = Math.floor(Math.random() * (chars.length));
      randstr += chars[indice];
    }
    const uname = randstr + fname.split("").map((x, i) => i % 2 == 0 ? x.toLowerCase() : x.toUpperCase()).join("")
    const pass = uname.split("").map((x, i) => i % 2 == 0 ? x : Math.floor(Math.random() * (uname.length + 1))).join("")

    const bday = randomDate(new Date(1960, 0, 1), new Date(2000, 0, 1))
    const phone = Math.floor(10000000000 + Math.random() * (89999999999));
    let cuit = '';

    const cod = Math.floor(Math.random() * (99));
    const num = Math.floor(5000000 + Math.random() * (50000000));
    const dig = Math.floor(1 + Math.random() * (9));
    cuit += cod > 9 ? cod : '0' + cod;
    cuit += num > 9999999 ? num : '0' + num;
    cuit += dig
    const salary = Math.floor(54000 + Math.random() * (120000));
    res.push(new User(fname, lname, uname, pass, bday, phone, cuit, salary))
  }
  return res;
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const controller = {
  getAll: (req, res) => {
    const users = createRandomUsers(10000);
    res.json(users)
  }
}

module.exports = controller;