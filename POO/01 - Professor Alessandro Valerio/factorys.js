function criarPessoa(nome, anoDeNascimento, profissao){
    return {
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function(){
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    }
}

var pessoa = criarPessoa("Lucas", 1990, "Estudante");
console.log(pessoa);