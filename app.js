var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/',
		{
			template: 'This is the template'
		})
		.when('/check',
		{
			template: 'This is another template'
		})
});