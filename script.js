let number = +prompt("son kiriting")
while (isNaN(number) || number === 0)  {
    let number = prompt("Notog'ri, sonni boshidan kiriting")
}
let chess = ""

for (let i = 0; i < number; i++) {
   for (let j = 0; j < number; j++) {
    
    if (i == j || i == number -1 ||j == number -1 || i == 0 || j == 0) {
        chess = chess + "⬛"
    }
    else {
        chess = chess + "⬜"
    }
   }
       console.log(chess);
       chess = ""
}