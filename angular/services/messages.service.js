var app = angular.module( 'invoiceApp.messages', []);

app.factory( 'Messages', [ '$http', '$q', function( $http, $q ) {

    var self = {
        messages: [ {
            img: 'dist/img/user2-160x160.jpg',
            name: 'Ricardo Daniel Abraján Flores',
            message: 'Bienvenido a nuestro servicio de facturación',
            email: 'ricardo@hotmail.com',
            date: '14-septiembre-2019'
        }, {
            img: 'dist/img/user2-160x160.jpg',
            name: 'Jose Abdiel Abraján Flores',
            message: 'Mensaje de Sprinf',
            email: 'abdiel@hotmail.com',
            date: '15-septiembre-2019'
        }, {
            img: 'dist/img/user2-160x160.jpg',
            name: 'Jaretzi Michelle Abraján Flores',
            message: 'Mensaje de Michel',
            email: 'michelle@hotmail.com',
            date: '16-septiembre-2019'
        } ],
    }
    return self;

} ] )