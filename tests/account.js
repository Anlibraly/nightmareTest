var exec = require('child_process').exec;

exports.login = function(){
	return function(nightmare){
	  nightmare
		.goto('http://beibei.com/')
		.wait('.top-nav')
		.exists('.view-ActionBack')
		.click('.view-ActionBack')
		.wait('form[action="http://login.beibei.com/member/login.html"]')
		.evaluate_now(function () {
		    return document.querySelector('.ipt-quick a').href
		})
		.then(function (result) {
			console.log(result)
		})
		.catch(function (error) {
			console.error('Search failed:', error);
		});
	}
}