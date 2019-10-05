var app = angular.module( 'login.loginService', []);

app.factory( 'LoginService', [ '$http', '$q', function( $http, $q ) {
    
    var self = {
        config: {},
        auth: function ( data ) {
            
            var d = $q.defer();

            $http.post( 'php/login/post.auth.php', data )
                .then( function( res ) {
                    d.resolve( res.data );
                } )
            
            return d.promise;
        }
    }
    return self;

} ] )