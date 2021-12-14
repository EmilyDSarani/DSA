//I am partner 2
//first in, first out
//Cristian described it like queuing a song on Spotify
//the song you queue will be the next song you will play

//Refresher on what class is again-
//Class is an object, and with that you can have keys and values. We gave this class a bunch of methods and an array to use
//to create a new one, you just state new Queue(); this way you dont have to re-type a ton of code

class Queue {
    #list = [];

    enqueue(item){
        //insertion operation, it is inserted at the end of the queue
        //one article I looked up reccommends using the push method for this

        return this.#list.push(item)

        //Marty did this the same way
    }

    dequeue(){
        //removal operation, it is removed from the front
        //the same article also mentioned using the shift method
        //need to add in the null
        return this.#list.shift();

        //const lsit =this.#list;
        //Marty did list.length ? list.shift() : null


    }

    hasNext(){
        //this is used to check if there are any elements remaining
        //only does true and false
        const list = this.#list.length

        //Marty did return !!list.length

    }
}

//
const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'goose'
// queue.enqueue('llama');
// console.log(queue.dequeue()); // 'lizard'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'llama'
// console.log(queue.hasNext()); // false
// console.log(queue.dequeue()); // null








