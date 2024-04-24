import LinkedList from "./LinkedList";

const ll = new LinkedList();
ll.append(11);
console.log(ll);
ll.prepend(22)
console.log(ll);
console.log("current tail is " + ll.currentTail())
ll.prepend(33)
console.log(ll);
console.log(ll.size())
console.log(ll.currentHead())
ll.prepend(2500);
console.log(ll.size())
console.log(ll.currentHead())
ll.append(500000000)
console.log(ll.toString())
ll.at(5);
console.log("this is the value at position 3 = " + ll.at(3))
console.log(ll)
console.log(ll.size())
console.log("current tail is " + ll.currentTail())
ll.pop();
console.log(ll)
console.log(ll.size())
console.log(ll.contains(11))
console.log(ll.findIndex(11))
console.log(ll.toString())



