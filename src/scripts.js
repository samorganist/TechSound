$(document).ready(function(){

  $('a[href^="#"]').click(function(){

  var the_id = $(this).attr("href");

      $('html, body').animate({

          scrollTop:$(the_id).offset().top-200
      },'slow');

  return false;});
  $('.stop-propagation').on('click', function (e) {
      e.stopPropagation();
  });


  $("#submitFormContact").click(function(){
    var req=0;
    var already=false;
    if(req && !($("#FormSucess").length )){
    $("#formcheck").append('<div id="FormSucess" class="col-sm-10 form-group alert alert-success"style="max-height: auto;text-center"> <strong>Success!</strong> Merci pour Votre Confiance,votre Demande sera traité dans les brefs delais.</div>');
    }else if(!req && !($("#FormFail").length ))  {
        var txt='<div id="FormFail" class="col-sm-10 form-group alert alert-danger"style="max-height: auto;text-center"> <strong>Désolé!</strong>Une erreur c'+
        'est produite ressayez plus tard.</div>'
        $("#formcheck").append(txt);
    }});
});
