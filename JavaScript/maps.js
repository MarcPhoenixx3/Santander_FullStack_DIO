function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if (value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Marcelo", "Admin");
usuarios.set("Kátia", "Admin");
usuarios.set("Carolina", "User");
usuarios.set("Bruna", "User");

console.log(getAdmins(usuarios));