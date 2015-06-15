/* 
* Last Updated: 1/7/2015
* Author: Gray Gilmore 
* CodePen: http://codepen.io/graygilmore/pen/oclvb
* Summary: Get social media share counts for custom buttons. G+ requires an API Key and is not included.
*/

$(function() {
  
	//Append page to be shared to end of Social Media URLs
	var permalink = websiteLink;

	$(".social-media a").prop("href", function (index, oldHref) {
		return oldHref + websiteLink;
	});


	//Get Social Media Counts

	//Facebook
	var getFacebookCount = function () {
		$.getJSON('http://graph.facebook.com/?ids='+permalink+'&callback=?', function(data){
			var facebookShares = data[permalink].shares;
			$('.fa-facebook .share-count').text(facebookShares);
		});
	};

	getFacebookCount();

	//LinkedIn
	var getLinkedinCount = function () {
		$.getJSON('http://www.linkedin.com/countserv/count/share?url='+permalink+'&callback=?', function(data){
			var linkedinShares = data.count;
			$('.fa-linkedin .share-count').text(linkedinShares);
		});
	};

	getLinkedinCount();

	//Pinterest
	var getPinterestCount = function () {
		$.getJSON('http://api.pinterest.com/v1/urls/count.json?url=' + permalink + '&callback=?', function(data) {
			var pinterestShares = data.count;
			$('.fa-pinterest .share-count').text(pinterestShares);
		});
	};

	getPinterestCount();

	//Twitter
	var getTwitterCount = function () {
		$.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+permalink+'&callback=?', function(data){
			var twitterShares = data.count;
			$('.fa-twitter .share-count').text(twitterShares);
		});
	};

	getTwitterCount();

}); 