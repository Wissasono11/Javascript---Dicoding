const user = {
    id: 11,
    email: "verstappen@reinjders.com",
    name: "Asep Verstappen Reinjders",
    nickname: "kubernetes",
    username: "kubernetes k8s",
    password: "password", 
};

// cara mendapatkan nilai dari masing-masing properti objek tanoa destructuring

/*const id = user.id;
const email = user.name

console.log(id, email); 
*/

// cara mendapatkan nilai dari masing-masing properti objek dengan destructuring
const {id, email} = user;
console.log(id, email);