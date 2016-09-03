  var link = document.getElementsByClassName('form-content');
  var link2 = document.getElementsByClassName('form-heading')

  var isShown = false;
  link[0].style.visibility = "hidden";
  
  link2[0].addEventListener("click", function(event){
    event.preventDefault();
    link[0].classList.remove('form-content-animate-up');
    link[0].classList.remove('form-content-animate-down');
  
    if (!isShown){
      link[0].classList.add('form-content-animate-up');
      link[0].style.visibility = "visible";
      isShown = true;
    }
    else if (isShown) {
      link[0].classList.add('form-content-animate-down');
      link[0].style.visibility = "hidden"; 
      isShown = false;
    }
  });
