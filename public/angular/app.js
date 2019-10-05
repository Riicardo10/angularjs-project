var app = angular.module( 'loginApp', [ 
    'login.loginService'
]);

app.controller( 'mainCtrl', ['$scope', 'LoginService', function($scope, LoginService) {
    
    console.log("Login Start by Ricardo Flores")

    $scope.invalid = false;
    $scope.load = false;
    $scope.message = "";
    $scope.data = {};

    $scope.auth = function( data ) {
        if( data.user.length < 3 ) {
            $scope.invalid = true;
            $scope.message = "Enter your username";
            return;
        }
        if( data.password.length < 3 ) {
            $scope.invalid = true;
            $scope.message = "Enter your password";
            return;
        }

        $scope.invalid = false;
        $scope.load = true;
        $scope.message = "";

        LoginService.auth( data ).then( function( res ) {
            console.log(res.err)
            if( res.err ) {
                $scope.invalid = true;
                $scope.load = false;
                $scope.message = res.mensaje;
            }
            else {
                window.location = res.url;
            }

        } )
    }
    
} ] );