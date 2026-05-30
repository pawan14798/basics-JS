function makecounter(start=0)
{
    let count=start;
    //rincrement(eturn{increment
    return{
increment(){count++},
decrement(){count--},
get(){ return count}
    }

    }
let counter=makecounter(10);
console.log(counter.get());//10
console.log(counter.increment());//undefined
console.log(counter.get());//11
console.log(counter.decrement());//undefined
console.log(counter.get());//10