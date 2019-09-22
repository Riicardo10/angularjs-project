var app = angular.module( 'invoiceApp', [ 
    'ngRoute',
    'invoiceApp.config',
    'invoiceApp.messages',
    'invoiceApp.notifications',
    'invoiceApp.customersCtrl',
    'invoiceApp.dashboardCtrl'
]);

app.controller( 'mainCtrl', ['$scope', 'Config', 'Messages', 'Notifications', function($scope, Config, Messages, Notifications) {
    console.log("App Start by Ricardo Flores")
    $scope.config = {};
    $scope.messages = Messages.messages;
    $scope.notifications = Notifications.notifications;

    $scope.user = {
        name: "Ricardo Flores"
    }

    Config.load().then( 
        function() {
            $scope.config = Config.config;
        }, function( err ) {
            console.log( err )
        }
    )

    $scope.active = function(menu, submenu) {
        $scope.menuDashboard = "";
        $scope.menuCustomers = "";

        $scope[menu] = 'active';
    }

    $scope.setTitleAndDescription = function( title, description ){
        $scope.title = title;
        $scope.description = description;
    }

} ] );

// ============================
//      Routes
// ============================
app.config( [ '$routeProvider', function( $routeProvider ) {
    $routeProvider
        .when( '/', {
            templateUrl: 'dashboard/dashboard.view.html',
            controller: 'dashboardCtrl'
        } )
        .when( '/customers', {
            templateUrl: 'customers/customers.view.html',
            controller: 'customersCtrl'
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

