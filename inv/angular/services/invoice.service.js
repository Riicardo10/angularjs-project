var app = angular.module('invoiceApp.invoice',[]);

app.factory('Invoice', ['$http', '$q', function($http, $q){

	var self = {
		
		numero_factura: undefined,
		fecha_solicitado: new Date(),
		estado: 'E',
		monto: 0,
		monto_neto: 0,
		impuesto: 0,
		ISV: 0,
		comentario: undefined,
		cliente_id: undefined,
		comentario: undefined,
		detalle: [],
		
		newInvoice: function(){
			self.numero_factura = undefined;
			self.fecha_solicitado = new Date();
			self.estado = 'E';
			self.comentario = undefined;
			self.cliente_id = undefined;
			self.detalle = [];
		},

		calculate: function(){
			self.monto = 0;
			for (item of self.detalle) {
			  	self.monto += item.precio_venta * item.cantidad;
			}
			self.impuesto   = self.monto * self.ISV;
			self.monto_neto = self.monto + self.impuesto;
		},

		addDetail: function( add ){
			self.detalle.push( add );
			self.calculate();
		},

		searchProduct: function( id ){
			var d = $q.defer();
			$http.get('php/productos/get.producto.php?id=' + id)
				.then( function( res ){
					res.data.producto.cantidad = 1;
					d.resolve( res.data.producto );
				});
			return d.promise;
		},

		removeDetail: function( item ){
			var index = self.detalle.indexOf(item);
  			self.detalle.splice(index, 1);  
  			self.calculate();
		},

		saveInvoice: function(){
			$http.post('php/facturas/post.guardarfactura.php',self)
				.success(function(respuesta){
				});
			return true;
		}
	};

	return self;

}]);