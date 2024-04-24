class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }


    checkLength(){
        if(this.length >= 1){
            this.length++
        }
    }

    append(value) {
        if(this.head == null) {
            const newNode = new Node( value , this.head)
            this.head = newNode
            this.length++;
        } else { 
            let current = this.head;
            while (current.next){
            current = current.next;
            }
            const newNode = new Node( value , null);
            current.next = newNode;
            this.length++;    
        }
    }

    prepend(value) {
        const newNode = new Node( value , this.head)
        this.head = newNode
        this.length++;
    }

    size(){
        return this.length;
    }

    currentHead() {
        if(this.head == null){
            return ("sorry the list is empty");
        }

        return this.head.value;
    }

    currentTail() {
        if(this.head == null){
            return ("sorry the list is empty");
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        return current.value;

    }

    at(index) {
        if(this.head == null){
            return ("sorry the list is empty");
        }

        let current = this.head;
        let counter = 1;

        while(counter < index){
            current = current.next;
            counter++;
        }

        return current.value;
    }

    pop() {
        if(this.head == null){
            return ("sorry the list is empty");
        }

        let current = this.head;
        let prev;

        while(current.next){
            prev = current;
            current = current.next
        }
        prev.next = null;
        this.length--;
    }

    contains(value) {
        if(this.head == null){
            return ("sorry the list is empty");
        }

        let current = this.head;
        let counter = 1;

        while(counter <= this.length) {
            if (current.value == value) {
                return true
            }

            current = current.next;
            counter++
        }

        return null
    }

    findIndex(value) {
        if(this.head == null){
            return ("sorry the list is empty");
        }

        let current = this.head;
        let counter = 1;

        while (counter <= this.length) {
            if(current.value == value) {
                return counter
            }
            current = current.next;
            counter++
        }

        return null
    }

    toString() {
        let current = this.head;
        let counter = 1;
        let linkedListString = "Head -> ";

        while(counter <= this.length) {
            linkedListString = linkedListString.concat( `(${current.value}) -> ` )
            current = current.next;
            counter++
        }

        linkedListString = linkedListString.concat(" null")
        return linkedListString;
    }

    insertAt(value, index) {

        if(index === 1 || index === 0) {
            this.prepend(value)
        } 

        let current = this.head;
        let prev;
        let counter = 1;

        while (counter <= this.length) {
            if(counter == index) {
                const newNode = new Node( value , current);
                prev.next = newNode;
                this.length++; 
                return
            }
            prev = current;
            current = current.next
            counter++
        }
    }

}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList;