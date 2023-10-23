class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Hero('Merlin', 35, 'mago');
  mago.atacar();


/* Exemplo de uso para as outras classes

const guerreiro = new Hero('Conan', 28, 'guerreiro');
guerreiro.atacar();

const monge = new Hero('Bruce Lee', 40, 'monge');
monge.atacar();

const ninja = new Hero('Hanzo', 30, 'ninja');
ninja.atacar(); 
*/