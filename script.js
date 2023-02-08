


// Adding newsAPI
const queryURL = "https://newsapi.org/v2/everything?q=keyword&apiKey=c7704ea57bcd4fd89f9234200e52229c";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);


});