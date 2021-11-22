// OBJECTOS //

var objetoUsuario = {
    "nombre": "Dwight",
    "apellido": "Schrute",
    "email": "beetsbears@battlestar.com"
};
console.log(objetoUsuario["nombre"]);    // leyendo el valor -- OUTPUT: Dwight
objetoUsuario["apellido"] = "Martin";    // actualizando el valor
objetoUsuario["bromaFavorita"] = "Yellow";    // añadiendo un nuevo par llave-valor
console.log(objetoUsuario);    // {"nombre": "Dwight", "apellido": "Martin", "email": "beetsbears@battlestar.com", "bromaFavorita": "Yellow"}