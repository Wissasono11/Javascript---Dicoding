// mengubah nilai dari properti objek

const user = {
    id: 24,
    email: "tijjy@verstappen.com",
    name : "Tijjy Verstappen",
    nickname: "Asep",
    username: "Pasep Paseo",
}

username = "Asep Reinjders"; 
console.log(user.username);

// menghapus nilai dari properti objek'
delete user.nickname;
console.log(user)