var app = angular.module( 'invoiceApp.notifications', []);

app.factory( 'Notifications', [ '$http', '$q', function( $http, $q ) {

    var self = {
        notifications: [ {
            icon: "fa-user",
            notification: "Nuevo usuario registrado"
        }, {
            icon: "fa-save",
            notification: "Se ocupa el 50% de almacenamiento del disco duro"
        } ],
    }
    return self;

} ] )