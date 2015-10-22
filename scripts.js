var apple = $(' .container ').click(function(event){
    var btnClicked = event.target.id;
    $(' body ').removeClass().addClass(btnClicked);
});