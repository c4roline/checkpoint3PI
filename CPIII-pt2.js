const alunos = require('./CPIII');

const carol = new alunos('carol', 8, [2,3,4,5,6,7,8,9]);
const matilda = new alunos('matilda', 9, [3,5,6,3,8,9,5,1]);
const iris = new alunos('iris', 6, [9,7,5,8,4,3,2,6]);

const estudantes = [carol, matilda, iris];
module.exports = estudantes;