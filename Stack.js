//Cristian is partner 1
 //Stack is first in, last out
 //this of it like rocks or jenga, the first one down will be on the bottom and as you stack it the last one will be up top. So to reach the bottom, you will have to take the top one away
 
  //Class is an object, and with that you can have keys and values. We gave this class a bunch of methods and an array to use
  //to create a new one, you just state new Stack(); this way you dont have to re-type a ton of code

class Stack {
    #list = [];
  
    push(item) {
      //implement me
      return this.#list.push(item);
    }
  
    pop() {
      //implement me
      return this.#list.pop()

      //null handler, Marty said
      //const list = this.#list
      //return list.length ? list.pop() : null;
    }
  
    peek() {
      //implement me
      //we had to develope this one because peek is not an array method
      //so, this way with the hidden list, we have to do the -1 so that wee always get the one that is next
      return this.#list[this.#list.length-1]

      //Marty used return this.#list.at(-1)
      //due to the null:
      //const list = this.#list;
      //return list.length ? list.at(-1) : null;

      //look up what .at does
    }
  
    get size() {
      //implement me
      return 
    }
  }
  
 

  const stack = new Stack();
  stack.push('fox');
  stack.push('goose');
  stack.push('lizard');
  console.log(stack.pop()); // 'lizard'
  console.log(stack.peek()); // 'goose'
  console.log(stack.pop()); // 'goose'
  stack.push('llama');
  console.log(stack.pop()); // 'llama'
  console.log(stack.peek()); // 'fox'
  console.log(stack.pop()); // 'fox'
  console.log(stack.pop()); // null