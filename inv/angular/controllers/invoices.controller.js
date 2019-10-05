var app = angular.module( 'invoiceApp.invoiceCtrl', [] );

app.controller( 'invoiceCtrl', [ '$scope', 'Customers', 'Invoice', function( $scope, Customers, Invoice) {

    $scope.active('menuInvoice');
    $scope.setTitleAndDescription('Invoice', 'Invoice information');

    $scope.customer = {};
	$scope.search = 1;
	$scope.add = {
		producto_id: "",
		cantidad:1
	};

	$scope.invoice = Invoice;
    $scope.invoice.ISV = $scope.config.ISV;
    
	$scope.hoy = new Date();

	
	$scope.searchCustomer = function(search){
		$scope.customers = {};
		Customers.search(search).then(function(){
			if( isNaN( search ) ){
				$("#modal_buscar_cliente").modal();
				$scope.customers = Customers.customers;
			}else{
				$scope.customers = Customers.customers[0];
			}
		});
	}

	$scope.customerChoosen = function(customer){
		$("#modal_buscar_cliente").modal('hide');
		$scope.customer = customer;
	}

	$scope.update = function(){
		Invoice.calculate();
	}

	$scope.searchProduct = function( producto ){
		if( producto.producto_id == "" ){
			return;
		}
		Invoice.searchProduct( producto.producto_id )
			.then(function( producto ){
				Invoice.addDetail( producto );
				$scope.agregar.producto_id = "";
				$scope.agregar.cantidad = 1;
			});
	}

	$scope.saveInvoice = function(){
		Invoice.cliente_id = $scope.cliente.id;
		Invoice.saveInvoice();
	}

	$scope.borrar_detalle = function( item ){
		Factura.borrar_detalle( item );
	}

	$scope.cancel = function(){
		swal({   
			title: "Estas seguro?",   
			text: "Seguro que desea cancelar la orden?",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Si",   
			cancelButtonText: "No, cancelar!!!",   
			closeOnConfirm: true,
			closeOnCancel: true 
		}, function(isConfirm){   
			if (isConfirm) {     
				$scope.cliente = {};
				Factura.nueva_factura();
				$scope.$apply();
			}
		});
	}
} ] )