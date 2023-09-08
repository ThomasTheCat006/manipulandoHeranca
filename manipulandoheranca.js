
class Livro {
    constructor(titulo, autor, genero, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
      this.ano = ano;
    }
  
    getInfo() {
      return `${this.titulo} - Autor: ${this.autor}(${this.ano})`;
    }
  }
  
  class Ficcao extends Livro {
    constructor(titulo, autor, ano) {
      super(titulo, autor, "Ficção", ano);
    }
  }
  
  class NaoFiccao extends Livro {
    constructor(titulo, autor, ano) {
      super(titulo, autor, "Não Ficção", ano);
    }
  }
  

var livro1 = new Ficcao('Duna', 'Frank Herbert', 1965);
var livro2 = new Ficcao('Dom Casmurro', 'Machado de Assis', 1899);
var livro3 = new NaoFiccao('Diario de Anne Frank', 'Anne Frank', 1947)


var biblioteca = new Array(livro1, livro2, livro3);

var livrosDeFiccao = biblioteca.filter((livro) => livro.genero == "Ficção");

var livrosDeNaoFiccao = biblioteca.filter((livro) => livro.genero == "Não Ficção");

var livrosDoSeculo19 = biblioteca.filter((livro) => livro.ano > 1799 && livro.ano < 1900);

var livrosDoSeculo20 = biblioteca.filter((livro) => livro.ano > 1899 && livro.ano < 2000);




console.log("Livros de Ficção:");
livrosDeFiccao.forEach((livro) => console.log(livro.getInfo()));

console.log("\nLivros de Não Ficção:");
livrosDeNaoFiccao.forEach((livro) => console.log(livro.getInfo()));

console.log("\nLivros do Século 19");
livrosDoSeculo19.forEach((livro) => console.log(livro.getInfo()));

console.log("\nLivros do Século 20");
livrosDoSeculo20.forEach((livro) => console.log(livro.getInfo()));


