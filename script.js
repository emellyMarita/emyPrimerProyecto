function result () {
  var score = 0 ;
  if(document.getElementById ('correct1').checked)
  {
    score ++; 
  }
 if(document.getElementById ('correct2').checked)
  {
    score ++;  
  };
  document.getElementByID('verresultados').innerHTML='Obtuviste '+score+ 'puntos';
}


