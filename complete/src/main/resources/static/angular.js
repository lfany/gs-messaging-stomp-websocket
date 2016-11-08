/**
 * Created by dp on 2016/11/8.
 */
angular.module('demo', [])
    .controller('Hello', function($scope, $http) {
        $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
    });