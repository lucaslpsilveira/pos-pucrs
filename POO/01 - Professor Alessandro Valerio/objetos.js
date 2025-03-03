class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudar() {
        console.log("Ola, meu nome eh " + this.nome);
    }
}

var pessoas = [];
pessoas.push(new Pessoa("Lucas", 20));
pessoas.push(new Pessoa("Maria", 30));

pessoas.forEach(pessoa => pessoa.saudar());