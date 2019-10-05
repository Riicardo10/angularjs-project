<?php
  session_start();
  unset( $_SESSION[ "user" ] );
?>

<!DOCTYPE html>
<html ng-app="loginApp" ng-controller="mainCtrl">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>INVOICE</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="AdminLTE.min.css">

    <!-- Angularjs -->
    <script src="angular/lib/angular.min.js"></script>
    <script src="angular/app.js"></script>
    <script src="angular/services/login.service.js"></script>
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href=""><b>INVOICE</b>INV</a>
      </div><!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form name="formLogin" ng-submit="auth( data )">
          <div class="form-group has-feedback">
            <input type="text" class="form-control" name="user" placeholder="User" ng-model="data.user" required>
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" name="password" placeholder="Password" ng-model="data.password" required>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <button type="submit" class="btn btn-primary btn-block btn-flat" ng-disabled="formLogin.$invalid || load">
                Sign In
              </button>
            </div><!-- /.col -->
          </div>
          <br>
          <div class="row" ng-show="invalid">
            <div class="col-md-12">
              <div class="alert alert-danger">
                <strong> Verifica datos! </strong>
                {{ message }}
              </div>
            </div>
          </div>
        </form>
      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->
  </body>
</html>
