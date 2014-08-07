/**
 * Created by Agnislav Onufrijchuk on 04.08.2014.
 */

'use strict';

angular.module('algorithms', [])

    .controller('GcdCtrl', ['$scope', 'gcd', function ($scope, gcd) {
        $scope.a = $scope.b = 0;
        $scope.result = {};

        $scope.calculate = function () {
            $scope.result = {};
            $scope.result['Iterative'] = gcd.iterative($scope.a, $scope.b);
            $scope.result['Euclid'] = gcd.euclid($scope.a, $scope.b);
        };

    }]);