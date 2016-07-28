var Nightmare = require('nightmare');
var nightmare = new Nightmare({ show: true });
console.log(111);
/*nightmare
	.goto('http://beibei.com/')
	.wait('.top-nav')
	.exists('.view-ActionBack')
	.click('.view-ActionBack')
	.wait('form[action="http://login.beibei.com/member/login.html"]')
	.evaluate(function () {
	     console.log('111aaaaa');
	     return document.querySelector('.ipt-quick a').href
	})
	.end()
	.then(function (result) {
		console.log(result)
	})
	.catch(function (error) {
		console.error('Search failed:', error);
	});*/
nightmare
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('.searchsubmit');