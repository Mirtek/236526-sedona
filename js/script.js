  var link = document.getElementsByClassName('form-content');
  var link2 = document.getElementsByClassName('form-heading')

  link[0].style.visibility = "hidden";
  
  link2[0].addEventListener("click", function(event){
    event.preventDefault();
    link[0].classList.add('form-content-animate');
    link[0].style.visibility = "visible";
  });
