const baza = [
    {
        name:"A.A.",
        text:"Lorem ipsum dolor sit amet.",
    },
    {
        name:"B.B.",
        text:"Lorem ipsum dolor sit amet.a",
    },
    {
        name:"C.C.",
        text:"Lorem ipsum dolor sit amet.b",
    },
];

const text1 = document.querySelector(".text");
const user1 = document.querySelector(".user");

let idx = 0;

updatebaza();

function updatebaza(){
    const {name,text} = baza[idx];
    text1.innerHTML = text;
    user1.innerHTML = name;
    idx++;
    if(idx === baza.length){
        idx = 0;
    }
    setTimeout(() => {
        updatebaza();
    }, 10000);
    
}