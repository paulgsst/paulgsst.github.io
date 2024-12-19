document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



document.addEventListener('DOMContentLoaded',function()
{
  let clique = false;
  let leMenu = document.getElementById("menuDeroulant");


  leMenu.addEventListener('click',function(){
    if(clique){
      leMenu.value = "Menu";
      clique = false;
    }
    else{
      leMenu.value = "Oui";
      clique = true;
    }
  })

  leMenu.addEventListener('mouseover', function(){
    leMenu.style.backgroundColor = '#fff000';
    
});


leMenu.addEventListener('mouseleave',function(){
  leMenu.style.backgroundColor = "#00FFFF";
})
})