var app = angular.module( 'invoiceApp.customers', []);

app.factory( 'Customers', [ '$http', '$q', function( $http, $q ) {

    var self = {
        'loading'       : false,
        'err'           : false, 
        'conteo' 		: 0,
        'customers' 	: [],
        'pag_actual'    : 1,
        'pag_siguiente' : 1,
        'pag_anterior'  : 1,
        'total_paginas' : 1,
        'paginas'	    : [],
        loadCustomers   : function( page ) {
            var d = $q.defer();
            $http.get( 'php/customers/get.customers.php?page=' + page )
                .then( function(res) {
                    res = res.data;
                    self.loading        = true
                    self.err            = res.err;
                    self.conteo 		= res.conteo;
                    self.customers 	    = res.clientes;
                    self.pag_actual     = res.pag_actual;
                    self.pag_siguiente  = res.pag_siguiente;
                    self.pag_anterior   = res.pag_anterior;
                    self.total_paginas  = res.total_paginas;
                    self.paginas	    = res.paginas;
                    return d.resolve();
                } )
            return d.promise;
        },
        saveCustomer    : function( customer,  ) {
            var d = $q.defer();
            $http.post( "php/customers/post.customer.php", customer)
                .then( function(res) {
                    self.loadCustomers(self.pag_actual);
                    return d.resolve();
                } )
            return d.promise;
        }
    }
    return self;
} ] )