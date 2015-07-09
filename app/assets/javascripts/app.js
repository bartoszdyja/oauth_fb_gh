angular
    .module('Oauth', [
        'ui.router',
        'templates',
        'satellizer'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    	$stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'index.html',
            controller: 'LoginCtrl'
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');




    })

    .config(function($authProvider) {
        $authProvider.github({
        clientId: '1ed14f94a36a9d52d47c',
        redirectUri: 'http://localhost:3000/auth/github/callback'
        });
    });

