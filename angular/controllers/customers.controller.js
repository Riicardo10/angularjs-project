var app = angular.module( 'invoiceApp.customersCtrl', [] );

app.controller( 'customersCtrl', [ '$scope', 'Customers', '$routeParams', function( $scope, Customers, $routeParams ) {

    var page = $routeParams.page;

    $scope.customer = {};

    $scope.active('menuCustomers');
    $scope.setTitleAndDescription('Customers', 'Customers information');

    $scope.customers = {}

    $scope.moveTo = function(page) {
        Customers.loadCustomers( page ).then(function() {
            $scope.customers = Customers
        } );
    }

    $scope.moveTo(page);

    $scope.showModal = function( customer ) {
        $('#modal-customer').modal();
        angular.copy(customer, $scope.customer);
    }

} ] )