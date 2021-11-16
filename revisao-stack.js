// Como uma pilha de livros
// Linear, um após o outro
// O último a entrar é o primeiro a sair

// LIFO: Last In First Out

/* 

Métodos fundamentais
- push() = adicionar um elemento á pilha
- pop() = remover o elemento do topo da pilha
- peek() = obter o elemento do topo da pilha
- size() = mostrar o tamanho da pilha

*/

// Passo 1: Modelagem

class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.data[this.top] = value;
    return this.data;
  }

  pop() {
    if (this.top < 0) return undefined;
    const poppedTop = this.data[this.top];
    delete this.data[this.top];
    this.top--;
    return poppedTop;
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined;
  }
}

// Passo 2: Utilização

const stack = new Stack();

// Adicionar dados
stack.push("learning");
stack.push("data");
console.log(stack.push("structures"));

console.log(stack.peek());

// Remover dados
stack.pop();
console.log(stack.pop());

console.log(stack.peek());
