function ram(a){
    let b=parseInt(a);
    if (b>10){
        console.log(b)
    }
    else{
        console.log(b*10)
    }
}
ram(5)

const ram1=(a,name)=>{
    return a>10?name:"ram";
}
console.log(ram1(30,"Pedro"));

const ram3={
    name:"pedro",
    age:5,
    isMarried:false
};
console.log(ram3);
ram4={...ram3,name:"Pascal"};
console.log(ram4);
myList=["hello","world","Pedro"];
myList.map((x)=>{
    console.log(x);
});

myList=myList.filter((x)=>{
    return x!="hello";
});
console.log(myList);