var app = angular.module( 'invoiceApp.customersCtrl', [] );

app.controller( 'customersCtrl', [ '$scope', function( $scope ) {
    $scope.active('menuCustomers');
    $scope.setTitleAndDescription('Customers', 'Customers information');
} ] )