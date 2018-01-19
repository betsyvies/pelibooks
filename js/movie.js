function getRatings(e) {
  for (var i = 0; i < ratings.length; i++) {

    tipos = ratings[];

    console.log (e)
  }
  
  
  
  
  
  
  // // Capturamos el click encima de una estrella
  // $("#stars li").click(function () {
  //   if ($(this).is("li:first") && $(this).hasClass("selected") && !$(this).nextAll("li").hasClass("selected")) {
  //     // Si es la primera estrella la selecciona, y dicha estrella
  //     // esta marcada y es la unica marcada, quitamos la clase
  //     $(this).removeClass("selected");

  //     // añadimos al valor al formulario
  //     $("input[name=stars]").val(0);
  //   } else {
  //     // añadimos la clase "selected"
  //     $(this).addClass("selected");

  //     // añadimos la clase "selected" a todas las estrellas anteriores
  //     $(this).prevAll("li").addClass("selected");

  //     // eliminamos la clase "selected" a todas las estrellas siguientes
  //     $(this).nextAll("li").removeClass("selected");

  //     // añadimos al valor al formulario
  //     $("input[name=stars]").val($("li").index($(this)) + 1);
  //   }
  // });
});