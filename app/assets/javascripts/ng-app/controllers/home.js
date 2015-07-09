angular.module('Oauth')
    .controller('LoginCtrl', function ($scope, $auth) {
        $scope.test = 'asdfa'
        $scope.authenticate = function(provider) {
      		$auth.authenticate(provider);
    	};
    	$scope.isAuthenticated = function() {
  			return $auth.isAuthenticated();
		};

		$scope.logout = function() {
  			$auth.logout();
  			alert('as');
		};

		$scope.isAuthenticated = function() {
  			return $auth.isAuthenticated();

		};
    });