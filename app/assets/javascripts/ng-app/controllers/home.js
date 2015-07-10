angular.module('Oauth')
    .controller('LoginCtrl', function ($scope, $auth) {
        
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(){
          alert('good');
        })
        .catch(function(response){
          alert(response.data);
          console.log(response);
        });

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