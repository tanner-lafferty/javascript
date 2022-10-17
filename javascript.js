const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];

const random = Math.floor(Math.random() * names.length);

console.log(names[random]);


function changeText(){
    var element = document.getElementById("randomField");
    element.innerHTML = (names[random]);
}

changeText();
