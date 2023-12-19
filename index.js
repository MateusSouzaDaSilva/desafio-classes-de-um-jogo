class Hero {

    constructor(nome, idade, tipo, monstrosDerrotados) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.monstrosDerrotados = monstrosDerrotados;

    }

    rank() {
        let xp = 2
        let level = this.monstrosDerrotados * xp
        let ranking;

        if (level >= 101) {
            ranking = "Imortal";
        } else if (level >= 91) {
            ranking = "Lendário";
        } else if (level >= 81) {
            ranking = "Diamante";
        } else if (level >= 51) {
            ranking = "Ouro";
        } else if (level >= 21) {
            ranking = "Prata";
        } else if (level >= 10) {
            ranking = "Bronze";
        } else if (level < 10) {
            ranking = "Ferro";
        }

        console.log(`Em suas aventuras já derrotou um total de ${this.monstrosDerrotados} monstros, por isso pertence ao ranking ${ranking}`)
    }

    info() {
        console.log(`O herói ${this.nome} tem ${this.idade} anos e pertence a classe ${this.tipo}.`)
    }


    atacar() {
        let tipoAtaque;

        switch(this.tipo) {
            case "mago":
                tipoAtaque = "magia"
                break
            case "guerreiro":
                tipoAtaque = "espada"
                break
            case "ninja":
                tipoAtaque = "shuriken"
                break
            case "monge":
                tipoAtaque = "artes marciais"
                break
        }

       
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${tipoAtaque}`)
    }
}

let herois = [
    new Hero("Cleber", 32, "mago", 15), 
    new Hero("Matias", 23, "guerreiro", 30),
    new Hero("Leticia", 25, "ninja", 50), 
    new Hero("Afonso", 39, "monge", 5) 
]

for(let i = 0; i < herois.length; i++) {
    herois[i].info()
    herois[i].rank()
    console.log("---------------------------------------")
    herois[i].atacar()
    console.log("---------------------------------------")
}