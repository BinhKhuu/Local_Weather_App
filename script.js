$(window).on('resize',function(){
  var height = $(window).height();
  if (height <= 600) {
    $('#background').css('height','600px');
  } else {
    $('#background').css('height','100vh');
  }
});


$('.degree').on('click',function(){ 
  var temp = parseInt(document.getElementById('temp').innerHTML);
  $('.degree').toggle();
  if ($('.c-btn').is(":visible")) {
    $('#temp').text(Math.round((temp - 32) * 5/9 ));
  } else{
    $('#temp').text(Math.round(temp * 9/5 + 32));  
  }
  count ++;  

});


$(document).ready(function(){
  var geo = navigator.geolocation;
  var lon;
  var lat;
  var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?";
  var api = "6f2c824263ee5023f4f840872e64362c";
  if (geo) {
    geo.getCurrentPosition(function(pos){
      lon = pos.coords.longitude;
      lat = pos.coords.latitude;
      url = url + "lat=" + lat + "&lon=" + lon + "&appid=" + api;
        $.getJSON(url,function(result){
          $('#location').text(result.name);
          $('#temp').text(Math.round(result.main.temp - 273.15));
          var icon = result.weather[0].id;
          if (icon >= 200 && icon <= 232) {
            $('.thunder-storm').css('display','inline-block');  
          } else if (icon >= 300 && icon <= 321) {
            $('.rainy').css('display','inline-block'); 
          } else if (icon >= 500 && icon <= 531) {
            $('.rainy').css('display','inline-block'); 
          } else if (icon >= 600 && icon <= 622) {
            $('.flurries').css('display','inline-block');  
          } else if (icon >= 701 && icon <= 781) {
            $('.rainy').css('display','inline-block');
          } else if (icon >= 801 && icon <= 804) {
            $('.cloudy').css('display','inline-block');
          } else {
            $('.sunny').css('display','inline-block');
          }         
        });
      });    
  }
  
});
