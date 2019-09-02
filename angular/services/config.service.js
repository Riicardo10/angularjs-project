var app = angular.module( 'invoiceApp.config', []);

app.factory( 'Config', [ '$http', '$q', function( $http, $q ) {

    var self = {
        config: {},
        load: function () {
            var d = $q.defer();
            $http.get( 'config.json' )
                .then( function ( res ) {
                    self.config = res.data;
                    d.resolve();
                } )
                .catch( function ( err ) {
                    d.reject();
                } )
            return d.promise;
        }
    }
    return self;

} ] )