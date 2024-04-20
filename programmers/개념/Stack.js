// 먼저 들어간 것이 마지막에 나오는 규칙 -> 선입후출 , FILO
// 스택에 삽입하는 연산을 push, 꺼내는 연산을 pop이라고 함. 

export default class Stack {
    constructor(){
        this.items = [];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        this.items.pop();
    }
    peek(){
        if(this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1]
    }
    getSize(){
        return this.items.length;
    }
    isEmpty(){
        return this.getSize === 0;
    }
}