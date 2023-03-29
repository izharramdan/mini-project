// alert menggunakan event handler onclick

const myButton1 = document.getElementById("buttonAlert1");// menemukan html elements by id

  function handleClick1() {
    alert("please sign in to watch");
  }
  
myButton1.onclick = handleClick1;  

const myButton2 = document.getElementById("buttonAlert2");

  function handleClick2() {
    alert("please sign in to watch");
  }
  
myButton2.onclick = handleClick2; 

const myButton3 = document.getElementById("buttonAlert3");

  function handleClick3() {
    alert("please sign in to watch");
  }
  
myButton3.onclick = handleClick3; 

// menambahkan dan menghapus elemen paragraf

let counter = 0;
const par = document.getElementById('addElementMoneyHeist');

function toggleParagraph() {
  counter++;

  if (counter % 2 !== 0) {
    let newElement = document.createElement('p');
    newElement.textContent = 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.';
    par.appendChild(newElement);
    par.style.display = 'block';
    if (counter % 2 !== 0) {
      document.getElementById('myButton').innerHTML = '';
    }
  } else {
    par.removeChild(par.lastChild);
    if (counter % 2 === 0) {
      document.getElementById('myButton').innerHTML = 'more';// merubah html elements ketika menyentuh angka genap akan muncul 'more' pada button
    }
  }
}

