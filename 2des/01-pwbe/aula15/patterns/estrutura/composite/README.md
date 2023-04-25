## Estrutura - Composite
O padrão de projeto Builder é usado para separar a construção de um objeto complexo de sua representação final, permitindo que o mesmo processo de construção possa criar diferentes representações. Aqui está um exemplo de como usar o padrão Builder em JavaScript:

```javascript
class Component {
  // define a interface para todos os componentes da árvore
  constructor(name) {
    this.name = name;
  }

  add(component) {}
  remove(component) {}
  getChild(index) {}
  getName() {}
  print() {}
}

class Leaf extends Component {
  // representa os objetos folha na árvore
  constructor(name) {
    super(name);
  }

  getName() {
    return this.name;
  }

  print() {
    console.log(this.name);
  }
}

class Composite extends Component {
  // representa os objetos compostos na árvore
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);
  }

  getChild(index) {
    return this.children[index];
  }

  getName() {
    return this.name;
  }

  print() {
    console.log(this.name);
    this.children.forEach(child => {
      child.print();
    });
  }
}

// Exemplo de uso:

const root = new Composite('root');
root.add(new Leaf('folha A'));
root.add(new Leaf('folha B'));

const comp = new Composite('composto X');
comp.add(new Leaf('folha XA'));
comp.add(new Leaf('folha XB'));

root.add(comp);

root.add(new Leaf('folha C'));

const leaf = new Leaf('folha D');
root.add(leaf);
root.remove(leaf);

root.print();
```

Neste exemplo, **Component** define a interface para todos os componentes da árvore, **Leaf** representa os objetos folha na árvore e **Composite** representa os objetos compostos na árvore. O Composite pode ter filhos, que podem ser Leaf ou Composite. O método **print()** percorre a árvore inteira e imprime todos os componentes na hierarquia.