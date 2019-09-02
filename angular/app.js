var app = angular.module( 'invoiceApp', [ 
    'ngRoute',
    'invoiceApp.config'
]);

app.controller( 'mainCtrl', ['$scope', 'Config', function($scope, Config) {
    console.log("App Start")
    $scope.config = {};

    $scope.user = {
        name: "Ricardo Flores"
    }

    Config.load().then(
        function() {
            $scope.config = Config.config;
        },
        function( err ) {
            console.log( err )
        }
    )
} ] );

// ============================
//      Routes
// ============================
app.config( [ '$routeProvider', function( $routeProvider ) {
    $routeProvider
        .when( '/', {
            templateUrl: 'dashboard/dashboard.html'
        } )
        .otherwise( {
            redirectTo: '/'
        } )
} ] );

// ============================
//      Filters
// ============================
app.filter( 'removeLetter', function() {
    return function( word ) {
        if( word && word.length > 1 )
            return word.substr(1);
        return word;
    }
} )