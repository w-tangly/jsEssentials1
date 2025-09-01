let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

// Conforme a conta progride, o valor das variáveis se altera
// x++ -> não interfere no valor de x
// --y -> interfere no valor de Y, fazendo-o valer 9
//  z=(5*9)/2+(9%3)
//  z=45/2+0
//  z=45/2 = 22.5