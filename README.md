# desafio-classes-de-um-jogo

Desafio Final do Bootcamp Potência Tech iFood da DIO. 

Neste desafio final foi necessário criar uma classe generica para representar o herói e criar um método para o ataque, dependendo da classe do herói o tipo de ataque muda.

## Exemplo:

O monge atacou usando artes marciais
O mago atacou usando magia

---------------------------------------------------------------------------------

Aproveitando os projetos anteriores, foi implementado o método `rank()` e acrescentadp a variável monstrosDerrotados dentro da classe Hero, cada monstro derrotado concede 2 de xp e a quantidade de xp determina o ranking do herói.

Similar aos projetos anteriores os rankings são: Ferro, Bronze, Prata, Ouro, Diamante, Lendário e Imortal.

Depois de determinar o ranking através do laço if é exibido no terminal a seguinte mensagem:

**Em suas aventuras já derrotou um total de `${monstrosDerrotados}` monstros, por isso pertence ao ranking `${ranking}`**

Como no desafio pedia informações do héroi que não foram exibidas, o método `info()` foi criado para exibi-lás:

**O herói `${nome}` tem `${idade}` anos e pertence a classe `${tipo}`.**

Por fim criei um herói de cada classe dentro do array herois e executei cada um dos metodos dentro do laço for:

O herói Cleber tem 32 anos e pertence a classe mago.
Em suas aventuras já derrotou um total de 15 monstros, por isso pertence ao ranking Prata

O mago Cleber atacou usando magia

O herói Matias tem 23 anos e pertence a classe guerreiro.
Em suas aventuras já derrotou um total de 30 monstros, por isso pertence ao ranking Ouro

O guerreiro Matias atacou usando espada
