const estudantes = require ('./CPIII-pt2')

const curso = {
    nomeCurso : "historia",
    notaPadrao: 5,
    faltaMax : 7,
    listaEstudantes: estudantes,

    inclusaoAluno: function(estudantes){
        this.listaEstudantes.push(estudantes)
    },


    aprovado: function(aluno){
        if(aluno.media() >= this.notaPadrao && aluno.quantidadeFaltas < this.faltaMax){
            return true;

        }else if(aluno.quantidadeFaltas === this.faltaMax && aluno.media() > (this.notaPadrao * 1.1)){
            return true

        }else{
            return false;
        }


    },


    aprovadosLista: function(){
        const lista = []
        this.listaEstudantes.forEach(
            item => {
                if(item.media() >= this.notaPadrao && item.quantidadeFaltas < this.faltaMax){
                    lista.push(true)

                }else if (item.quantidadeFaltas === this.faltaMax && item.media() > (this.notaPadrao * 1.1)){
                    lista.push(true)

                }else{
                    lista.push(false)
                }
            }
        )
        return lista
    }
}

    console.log(curso.aprovadosLista())