document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
/// Cette fonction permet de faire défiler le contenu du menu vers le bas de manière fluide.
document.addEventListener('DOMContentLoaded',function()
{
  $("[id='menuDeroulant']")

  let clique = false;
  let leMenu = $("[id = 'menuDeroulant']");
  let sectionContact = $("section[id = 'contact']");
  let formContact =    sectionContact.find($("form"))

  leMenu.on('click',function(){
    if(clique){
      leMenu.val("Menu");
      formContact.animate({marginLeft : 0}, 2000);
      clique = false;
    }
    else{
      leMenu.val("Oui");
      formContact.animate({marginLeft : 1000}, 2000)
      clique = true;
    }
  })

  leMenu.on('mouseover', function(){
    leMenu.css("background-color","#FFF000");
    
});



leMenu.on('mouseleave',function(){
  leMenu.css("background-color","#00FFFF");
})
/* Fonctions du menu déroulant */

let leMenuSelection = $("[id='menuSelection']");
let leSousMenu = $("[class='sousMenu']");
let unTest = $("section[id='accueil']")
leMenuSelection.on('click' ,function(){
  if(!clique){
  leMenuSelection.animate({color:'#FF0000'},200);
  unTest.animate({height:284.375} ,500); 
  leSousMenu.css('display','block');
  leSousMenu.animate({right:20 , opacity:1},480);
  clique = true;
}
else{
  leMenuSelection.animate({color:'#ffffff'},200);
  unTest.animate({height:208.375} ,500);
  leSousMenu.animate({right:200 , opacity:0},480);
  clique = false;
}
})


let descriptionProjet = $("[id = 'description'");
let imgMenu = $("[id = 'imgMenu']");
descriptionProjet.css('display','block');
descriptionProjet.animate({opacity:1},1500);
imgMenu.css('display','block');
imgMenu.animate({opacity:1},1500);
let contact = $("[id = 'contactProjet']");
contact.animate({marginTop:80} , 700);
let cliqueimgMenu = false;
let descriptionMagasin = $("[id = 'descriptionMagasin']");
imgMenu.on('click',function(){
  if(!cliqueimgMenu){
    descriptionMagasin.css('display','block');
    descriptionMagasin.animate({opacity:1},1500);
    cliqueimgMenu = true;
  }
  else{
    descriptionMagasin.animate({opacity:0},1500);
    descriptionMagasin.css('display','none');
    cliqueimgMenu = false;
  }


})})
