var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = "Unknown author";
    }
    var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;

    if (tweetText.length > 140) {
	    getQuote();
}   else {
	    var tweet = tweetLink + encodeURIComponent(tweetText);
	    $('.quote').text(input.quoteText);
	    $('.author').text("Author: " + input.quoteAuthor);
	    $('.tweet').attr('href', tweet);
    }
}
$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});




/*var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

function getQuote() {
$.getJSON(quoteUrl, createTweet);
var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
if (tweetText.length > 140) {
getQuote();
} else {
var tweet = tweetLink + encodeURIComponent(tweetText);
$('.quote').text(input.quoteText);
$('.author').text("Author: " + input.quoteAuthor);
$('.tweet').attr('href', tweet);
}

}

function createTweet(input) {
if (!input.quoteAuthor.length) {
input.quoteAuthor = "Unknown author";
}
}

$(document).ready(function () {
getQuote();
$('.trigger').click(function () {
getQuote();
})
});*/

/*var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(function() {
    getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
$.ajax({
    method: 'GET',
    url: url, //tutaj dziwna konstrukcja, ale po lewej stronie mamy nazwę parametru, a po prawej jest nazwa zmiennej przechowującej wartość
    success: function(res) {
        $paragraph.text(res.value.joke);
    }

});

} */
