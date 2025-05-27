function Pessoa(nome, anoDeNascimento, profissao){
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa1 = new Pessoa("Lucas", 1990, "Estudante");
pessoa1.anoDeNascimento = 1995;
console.log(pessoa1.calculaIdade());

const pessoa2 = new Pessoa("Maria", 1990, "Estudante");
pessoa2.anoDeNascimento = 1995;
console.log(pessoa2.calculaIdade());