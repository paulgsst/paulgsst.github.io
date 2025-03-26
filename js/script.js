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
let unTest = $("section[id='accueil2']")
leMenuSelection.on('click' ,function(){
  if(!clique){
  leMenuSelection.animate({color:'#FF0000'},200);
  /*unTest.animate({height:284.375} ,500); */
  leSousMenu.css('display','block');
  leSousMenu.animate({right:20 , opacity:1},480);
  clique = true;
}
else{
  leMenuSelection.animate({color:'#000000'},200);
 /* unTest.animate({height:208.375} ,500);*/
  leSousMenu.animate({right:200 , opacity:0},480);
  clique = false;
}
})

let texteAProposDeMoiPresentation = $("[id='texteAProposDeMoiPresentation']");
texteAProposDeMoiPresentation.on('mouseover' , function(){
  if (window.matchMedia("(max-width: 768px)").matches){
  }
  else{
    texteAProposDeMoiPresentation.animate({fontSize: '25px', maxWidth : "600px", marginLeft : "100px", marginTop : "40px", marginBottom : "40px"},200)
  }
})
texteAProposDeMoiPresentation.on('mouseleave' , function(){
  if (window.matchMedia("(max-width: 768px)").matches){
  }
  else{
    texteAProposDeMoiPresentation.animate({fontSize: '20px', maxWidth : "500px", marginLeft : "150px", marginTop : "20px", marginBottom : "20px"},100)
  }
})

let texteAProposDeMoiPassions = $("[id='texteAProposDeMoiPassions']");
texteAProposDeMoiPassions.on('mouseover' , function(){
  if (window.matchMedia("(max-width: 768px)").matches){
  }
  else{
    texteAProposDeMoiPassions.animate({fontSize: '25px', maxWidth : "600px", marginLeft : "100px", marginTop : "40px", marginBottom : "40px"},200)
  }})
texteAProposDeMoiPassions.on('mouseleave' , function(){
  if (window.matchMedia("(max-width: 768px)").matches){
  }
  else{
    texteAProposDeMoiPassions.animate({fontSize: '20px', maxWidth : "500px", marginLeft : "150px", marginTop : "20px", marginBottom : "20px"},100)
  }})

let texteAProposDeMoiParcoursScolaire = $("[id='texteAProposDeMoiParcoursScolaire']");
texteAProposDeMoiParcoursScolaire.on('mouseover' , function(){
  if (window.matchMedia("(max-width: 768px)").matches){
  }
  else{
    texteAProposDeMoiParcoursScolaire.animate({fontSize: '25px', maxWidth : "600px", marginLeft : "100px", marginTop : "40px", marginBottom : "40px"},200)
  }})
texteAProposDeMoiParcoursScolaire.on('mouseleave' , function(){
  if (window.matchMedia("(max-width: 768px)").matches){
  }
  else{
    texteAProposDeMoiParcoursScolaire.animate({fontSize: '20px', maxWidth : "500px", marginLeft : "150px", marginTop : "20px", marginBottom : "20px"},100)
  }})


let descriptionProjet = $("[id = 'description'");
let imgMenuFleche = $("[id = 'imgMenuFleche']");
let imgMenu = $("[class = 'imgMenu']");
descriptionProjet.css('display','block');
descriptionProjet.animate({opacity:1},1500);
imgMenu.css('display','block');
imgMenu.animate({opacity:1},1500);
let contact = $("[id = 'contactProjet']");
contact.animate({marginTop:80} , 700);
let cliqueimgMenu = false;
let descriptionMagasin = $("[id = 'descriptionMagasin']");
imgMenuFleche.on('click',function(){
  if(!cliqueimgMenu){
    descriptionMagasin.css('display','block').animate({opacity:1,marginTop:"0%"},1500);
    cliqueimgMenu = true;
    imgMenuFleche.attr("src","Images/fleche_haut.png")
  }
  else{
    descriptionMagasin.animate({opacity:0,marginTop:"-89%"},1500,  function() {
      descriptionMagasin.css('display', 'none');
    });
    imgMenuFleche.attr("src","Images/fleche_bas.png")
    
    /*descriptionMagasin.delay(1500).css('display','none');*/
    cliqueimgMenu = false;
  }


})})

function telechargerCV(){
  const link = document.createElement("a");
  link.href = "Sources/cv_gresset_paul.pdf";
  link.download = "Sources/cv_gresset_paul.pdf";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function telechargerTS(){
  const link = document.createElement("a");
  link.href = "Sources/tableau_de_synthèse.pdf";
  link.download = "/Sources/tableau_de_synthèse.pdf";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}