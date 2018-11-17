// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {

										 
		 var onSuccess = function(position) {
      
			  
			  map = new google.maps.Map(document.getElementById('map'), {
			  center: {lat: position.coords.latitude , lng: position.coords.longitude },
			  zoom: 8
			});

    };
	
	 function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

	
	 navigator.geolocation.getCurrentPosition(onSuccess, onError);
	 
	
    $$("#calcular").click(function(){

       var velocidade = $$("#txt-velocidade").val();
       var distancia  = $$("#txt-distancia").val();
       var msg        = "";


       var calculo = distancia/velocidade;
       var tempo   = calculo*60;

       if(tempo == 60){
        msg = tempo/60+" Hora";
       }else
        if(tempo > 60){
            msg = tempo/60+" Horas";
        }else
            if(tempo > 1 && tempo < 60){
                msg = tempo+" Minutos";
            }else{
        msg = tempo+" Minuto";
       }

       if(msg.indexOf("NaN")>=0){
        myApp.alert("Preencha os campos corretamente !","Aviso");
       }else{
        myApp.alert("Você chegará em seu destino em <font color='green'><strong>"+msg+"</strong></font>","Aviso");
       }
    });
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
    function calcular(){
        alert(1);

    }
       
})