var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
  { name: "Jennifer", age: 16 },
];

/*
PREGUNTAS:

1.¿Cómo harías print/log de la edad de John?
2.¿Cómo harías print/log del nombre del primer objeto?
3.¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto.

Michael - 37
John - 30
David - 27

4.¿Cómo harías para imprimir el nombre de los mayores de edad?

*/

// 1.

console.log("Edad de John: " + users[1].age + " años");

// 2.
console.log("Primer Objeto: " + users[0].name);

// 3.
console.log("");
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name + " - " + users[i].age);
}

// 4. SUPONIENDO QUE MAYOR DE EDAD ES +18.
console.log("");

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 0) {
    // MAYORES DE EDAD
    console.log("Nombre: " + users[i].name + " ,Edad: " + users[i].age);
  } else {
    // MENORES DE EDAD
    console.log("Nombre: " + users[i].name + " ,Edad: " + users[i].age);
  }
}
