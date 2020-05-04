var country = new Array();
$(document).ready(function()
{
  $('.ui.button').click(function(e){
    e.preventDefault();
    $.ajax({
    type:'get',
    url: "https://restcountries.eu/rest/v2/name/"+$('#country').val()+"?fullText="+true,
    success: function (response) {
     document.getElementById("Cname").innerHTML=response[0].name;
     $('#r1').html(response[0].region);
     $('#r2').html(response[0].capital);
     $('#r3').html(response[0].population);
     $('#r4').html(response[0].languages[0].name);
     $('#r5').html(response[0].currencies[0].code);
     $('#r6').html(response[0].timezones);
   },
   error: function() {
    $('#result').html('<p>An error has occurred</p>');
    }
    });
  });
var input = document.getElementById("country");
var awesomplete = new Awesomplete(input, {
minChars: 1,
autoFirst: true
});
$("input").on("keyup", function(){
$.ajax({
url: 'https://restcountries.eu/rest/v1/region/' + $('#reg').val(),
type: 'GET',
dataType: 'json'
})
.success(function(data) {
var list = [];
$.each(data, function(key, value) {
list.push(value.name);
});
awesomplete.list = list;
});
});
  });
