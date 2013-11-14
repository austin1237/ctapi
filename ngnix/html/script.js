var myApp = angular.module('myApp', [])

//*****todos******
///Determine what value should be grabed from mongo when the user changes collection
//Document grab the collections from database
//begin loading partials views for the edit function



//Provides an Http resource to be injected into any controller that needs it.
function Controller($scope, $http) {
    //scope is all of the elements within the controller declared on the html

$scope.insertVaules = function () {
    var url = 'http://localhost:3000/test2';
    console.log("about to post user id");
    console.log($scope.user.userId);
    console.log($scope.user.userName);
    console.log($scope.user.password);
    console.log(JSON.stringify($scope.user));
    $http({ method: 'Post', url: url, data: JSON.stringify($scope.user) }).
        success(function (data, status, headers, config) {
            console.log(data);
            console.log('success');
        }).
        error(function (data, status, headers, config) {
            console.log('error');
        });
};

    $scope.showVaules = function () {
        console.log("grabbing Values from the database...");
        $scope.users = [];
        var url = 'http://localhost:3000/users';
        $http({ method: 'GET', url: url }).
            success(function (data, status, headers, config) {
                angular.forEach(data, function(user) {
                    $scope.users.push(user);
                    console.log(user);
                });
                console.log('success');

                //gets the headers for the table
                $scope.headers = [];
                for (var key in $scope.users[0]) {
                    if ( $scope.users[0].hasOwnProperty(key)) {

                        console.log('the header is ' + key);
                        $scope.headers.push(key);
                    }

                }
                $scope.headers.sort();
            }).
            error(function (data, status, headers, config) {
                console.log('error');
            });



    }


    $scope.removeItem = function (item){
        var index = $scope.users.indexOf(item);

        if (index > -1) {
            $scope.users.splice(index, 1);
        }
    }


    $scope.getDbInfo = function () {
        var url = 'http://localhost:3000/mongo';
        console.log($scope.user.userId);
        $http({  method: 'get', url: url}).
            success(function (data, status, headers, config) {
                console.log(data);
                console.log('success');
            }).
            error(function (data, status, headers, config) {
                console.log('error');
            });
    };

    $scope.deleteVaules = function () {
        var url = 'http://localhost:3000/delete';
        console.log($scope.user.userId);
        $http({  method: 'Post', url: url, data: JSON.stringify($scope.user) }).
            success(function (data, status, headers, config) {
                console.log(data);
                console.log('success');
            }).
            error(function (data, status, headers, config) {
                console.log('error');
            });
    };

    $scope.updateVaules = function () {
        var url = 'http://localhost:3000/update';
        console.log($scope.user.userId);
        console.log($scope.user.password);
        $http({  method: 'Post', url: url, data: JSON.stringify($scope.user) }).
            success(function (data, status, headers, config) {
                console.log(data);
                console.log('success');
            }).
            error(function (data, status, headers, config) {
                console.log('error');
            });
    };
}


//Dunno if this controller is needed just need a way to figure out how to elegantly send the orginal user back to the data base
// as well as what the updated values should be.




