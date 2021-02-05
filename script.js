const apiKey = "934912968834c302ba52c74847710f96";

$(document).ready(function() {
    $('form').submit(function() {
        var cityName = $('#cityName').val();
        // your code here (build up your url)
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`, 
            (res) => {
                // console.log(res);
                // $("#data").text(res.main.temp);
                let responseData = `<p> ${res.name}: ${res.weather[0].description}</p> <p> Temparture: ${res.main.temp} F</p>`;
                $('#data').html(responseData);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});


    //     var cityName
    //     $('#submit').click(function() {
    //         $.get('api.openweathermap.org/data/2.5/weather?q=London&appid=934912968834c302ba52c74847710f96', function (res){
    //             console.log(res);
    //             $('#data').text(res.text);
    //         }, "json");
    //     });
    // });
    
        // $(document).ready(function (){
    
    //     $("#click").click(function(){
    //         $.get("https://cat-fact.herokuapp.com/facts/random",function (res){
    //             console.log(res);
    //             $("#fact").text(res.text);
    //         },"json");
    
    //     })
    // })