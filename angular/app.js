var app = angular.module( 'invoiceApp', [ 
    'ngRoute',
    'invoiceApp.config',
    'invoiceApp.messages',
    'invoiceApp.notifications'
]);

app.controller( 'mainCtrl', ['$scope', 'Config', 'Messages', 'Notifications', function($scope, Config, Messages, Notifications) {
    console.log("App Start by Ricardo Flores")
    $scope.config = {};
    $scope.messages = Messages.messages;
    $scope.notifications = Notifications.notifications;

    
    console.log($scope.messages);
    console.log($scope.notifications);

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
app.filter( 'smartMessage', function() {
    return function( message ) {
        if( message.length > 20 ) {
            return message.substr(0, 32) + "...";
        }
        return message;
    }
} )

