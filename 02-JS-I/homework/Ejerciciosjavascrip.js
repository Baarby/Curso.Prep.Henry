console.log("holamundo");
// function imprime1aN(n) {
//   for (var i = 0; i <= n; i++) {
//     if (i % 2 === 1) console.log(i);
//     if (i == 100) {
//       return;
//     }
//     if (i > 200) {
//       for (var j = 1; j <= 10; j++) {
//         console.log(j);
//       }
//     }
//   }
// }
// imprime1aN(201);

function matrizmxn(n, m) {
  var j = 0;
  var i = 0;
  while (i < n) {
    while (j < m) {
      console.log("i:", i, " J:", j);
      j++;
    }
    j = 0;
    i++;
  }
}
matrizmxn(2, 3);
