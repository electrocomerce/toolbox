
$.getJSON('json/gardening.json', function(data) {
  // Mezcla el array de imágenes
  data.imagenes.sort(function() { return 0.5 - Math.random() });

  // Muestra todas las imágenes
  $.each(data.imagenes, function(i, imagen) {
    var card = $('<div class="card" />');
    var imgDiv = $('<div />').appendTo(card);
    var a = $('<a />').attr({
        'href': imagen.urlWeb,
        'target': '_blank'
    }).appendTo(imgDiv);
    var img = $('<img class="card-img-top" />').attr({
        'src': imagen.url,
        'alt': imagen.descripcion
    }).appendTo(a);
    var cardBody = $('<div class="card-body" />').appendTo(card);
    var p = $('<p class="card-text" />').text(imagen.descripcion).appendTo(cardBody);
    
    // Añade el precio en negrita y el botón en una div con display:flex
    var buttonDiv = $('<div class="d-flex justify-content-between align-items-center" />').appendTo(cardBody);
    var price = $('<p class="card-text"><strong>' + imagen.precio + '</strong></p>').appendTo(buttonDiv);
    var button = $('<a class="btn btn-primary" />').attr({
        'href': imagen.urlWeb,
        'target': '_blank'
    }).text('Check it out').appendTo(buttonDiv);

    // Añade la tarjeta a una columna y añade la columna al contenedor
    var col = $('<div class="col-lg-4 col-md-6 col-sm-12" />').append(card).appendTo('#cardcontent');
  });
});













