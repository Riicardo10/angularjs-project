var app = angular.module( 'invoiceApp.dashboardCtrl', [] );

app.controller( 'dashboardCtrl', [ '$scope', function( $scope ) {
    $scope.active('menuDashboard');
    $scope.setTitleAndDescription('Dashboard', 'All information');
} ] )