var app = angular.module( 'invoiceApp', [ 
    'ngRoute',
    'jcs-autoValidate',
    'invoiceApp.config',
    'invoiceApp.messages',
    'invoiceApp.customers',
    'invoiceApp.invoice',
    'invoiceApp.notifications',
    'invoiceApp.customersCtrl',
    'invoiceApp.dashboardCtrl',
    'invoiceApp.invoiceCtrl'
]);

angular.module('jcs-autoValidate')
    .run([
        'defaultErrorMessageResolver',
        function (defaultErrorMessageResolver) {
            // To change the root resource file path
            defaultErrorMessageResolver.setI18nFileRootPath('angular/lib/');
            defaultErrorMessageResolver.setCulture('es-co');
        }
    ]);

app.controller( 'mainCtrl', ['$scope', 'Config', 'Messages', 'Notifications', 'Customers', function($scope, Config, Messages, Notifications, Customers) {
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
        $scope.menuInvoices = "";

        $scope[menu] = 'active';
    }

    $scope.setTitleAndDescription = function( title, description ){
        $scope.title = title;
        $scope.description = description;
    }

} ] );

// ============================
//      Directivas
// ============================

app.directive('enterKey', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enterKey);
                });

                event.preventDefault();
            }
        });
    };
});


// ============================
//      Routes
// ============================
app.config( [ '$routeProvider', function( $routeProvider ) {
    $routeProvider
        .when( '/', {
            templateUrl: 'dashboard/dashboard.view.html',
            controller: 'dashboardCtrl'
        } )
        .when( '/customers/:page', {
            templateUrl: 'customers/customers.view.html',
            controller: 'customersCtrl'
        } )
        .when( '/invoices', {
            templateUrl: 'invoices/invoices.view.html',
        } )
        .when( '/invoice', {
            templateUrl: 'invoices/invoice.new.view.html',
            controller: 'invoiceCtrl'
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

