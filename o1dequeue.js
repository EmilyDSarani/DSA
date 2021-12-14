//Cristian and I paired this one
//We could not figure it out

//Most likely, the time complexity of your enqueue is O(1) but dequeue is O(n). Can you make it so both operations are O(1)? Hint: the people in line can't shift (take a step forward), can you move the front of the line?

class Queue {
    #list = [];

    //Marty tracked the #index = 0

    enqueue(item){
        return this.#list.push(item)
    }

    dequeue(){
        return this.#list.shift();

        //Marty:
        //const list = this.#list
        //const item = list[this.#index];
        //this.#index++
        //return item;


    }

    hasNext(){
        const list = this.#list.length
    }
}


const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null