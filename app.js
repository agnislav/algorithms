/**
 * Created by Agnislav Onufrijchuk on 04.08.2014.
 */

'use strict';

angular
    .module('algorithms', [])

    .service('gcd', [function () {
        /*
         * Helpers
         */
        var response = {
            result: null,
            error: ''
        };

        var result = function (result) {
            return angular.extend({}, response, {result: result});
        };

        var error = function (error) {
            return angular.extend({}, response, {error: error});
        };

        // TODO: move to a dedicated math service
        var sign = function (i) {
            return i > 0 ? 1 : i < 0 ? -1 : 0;
        };

        /*
         * Algorithm methods
         */

        this.euclid = function (a, b) {
            // Value checks
            if (isNaN(a) || isNaN(b) || !a || !b) {
                return error('Both a and b should be specified and should be numbers and shouldn\'t be equal 0');
            }
            if (sign(a) !== sign(b)) {
                return error('Both a and b should have common sign');
            }

            // algorithm body
            return result((function calculateEuclid(a, b) {
                var m = a % b;
                return m === 0 ? b : calculateEuclid(b, m);
            }(a, b)));
        };

        this.iterative = function (a, b) {
            // Value checks
            if (isNaN(a) || isNaN(b) || !a || !b) {
                return error('Both a and b should be specified and should be numbers and shouldn\'t be equal 0');
            }
            if (sign(a) !== sign(b)) {
                return error('Both a and b should have common sign');
            }

            // algorithm body
            var gcd = Math.min(a, b);
            while (gcd > 1 && (a % gcd !== 0 || b % gcd !== 0)) {
                gcd--;
            }
            return result(gcd);
        };
    }])

    .controller('GcdCtrl', ['$scope', 'gcd', function ($scope, gcd) {
        $scope.a = $scope.b = 0;
        $scope.result = {};

        $scope.calculate = function () {
            $scope.result = {};
            $scope.result['Iterative'] = gcd.iterative($scope.a, $scope.b);
            $scope.result['Euclid'] = gcd.euclid($scope.a, $scope.b);
        };

    }]);