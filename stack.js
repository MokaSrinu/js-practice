function MyArray(){
    for(index=0;index<arguments.length;index++){
        this[index]=arguments[index];
    }
    this.length=arguments.length
}
MyArray.prototype.push=function(item){
    let index=arguments.length;
    this[index]=item;
    this.length++;
}
MyArray.prototype.pop=function(){
    let index=this.length-1;
    const popeditem=this[index];
    delete this[index];
    this.length--;
    return popeditem;
}
MyArray.prototype.top=function(){
    let index=this.length-1;
    const topitem=this[index];
    return topitem;
}
MyArray.prototype.print=function(){
    var bag='';
    for(var i=0;i<this.length;i++){
        bag=bag+this[i]+" ";
    }
    console.log(bag);
}
MyArray.prototype.printReverse=function(){
    var bag='';
    for(var i=this.length-1;i>=0;i--){
        bag=bag+this[i]+" ";
    }
    console.log(bag);
}
MyArray.prototype.size=function(){
    return this.length;
}
const arr=new MyArray(1,2,3,4);
console.log(arr);
console.log(arr.pop());
console.log(arr.top())
arr.print();
arr.printReverse();
console.log(arr.size());