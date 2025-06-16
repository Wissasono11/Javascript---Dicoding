const brawl = true; 

console.log("Login ML");

if(brawl){
    console.log("Masuk ke lobby");
}
else {
    console.log("Ubah ke mode classic")
}

console.log("Bermain game")

// ternary operator
const login = true
let status = login ? "login" : "login gagal";
let posisi = status ? "masuk ke lobby" : "stay di menu utama"
let mode = posisi === "masuk ke lobby" ? "brawl" : posisi === "classic" ? "classic" : "ranked";

console.log(`anda berhasil ${status}, silahkan pilih ${posisi}, dan pilih mode ${mode}`)
 
// switch case                       
const ranked = "Glory";
switch (ranked){
    case "Immortal" :
        console.log("Anda berada di tier Immortal");
        break;
    case "Glory" :
        console.log("Anda berada di tier Glory")
        break;
    case "Honor" :
        console.log("Anda berada di tier Honor")
        break;
    case "Mythic" :
        console.log("Anda berada di tier Mythic")
        break;
    case "Epic" :
        console.log("Yaha, masih Epic!")
        default:
        console.log("Anda berada di tier Warrior")
}