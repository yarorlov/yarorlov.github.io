var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vyshe-nos-kusok-myasa.jpg') {
      myImage.setAttribute ('src','images/dont-panic.jpg');
    } else {
      myImage.setAttribute ('src','images/vyshe-nos-kusok-myasa.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'ПРИВЕТ, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'ПРИВЕТ, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }