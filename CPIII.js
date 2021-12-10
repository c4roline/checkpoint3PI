const estudante = function Aluno(nome,quantidadeFaltas,notas){

    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.media = function(){
        let media = 0;
        let soma = 0;

        this.notas.forEach(
            nota =>{
                soma += nota;
            }
        )

        media = soma / this.notas.length;
        return media;
    }
    
    this.falta = function(){
    this.quantidadeFaltas += 1
    
    }
}

module.exports = estudante;