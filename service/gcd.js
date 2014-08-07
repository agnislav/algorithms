/**
 * Created by Agnislav Onufrijchuk on 07.08.2014.
 */

angular
    .module('algorithms')

    .service('gcd', ['MyMath', 'Response', function (MyMath, Response) {

        var _gcd_validate = function(a, b) {
            Response.flush();
            if (isNaN(a) || isNaN(b) || !a || !b) {
                Response.logError('Both a and b should be specified and should be numbers and shouldn\'t be equal 0');
            }
            else if (MyMath.sign(a) !== MyMath.sign(b)) {
                Response.logError('Both a and b should have common sign');
            }

            return Response.isError() ? false : true;
        };

        this.euclid = function (a, b) {

            if (_gcd_validate(a, b)) {
                Response.putResult((function calculateEuclid(a, b) {
                    var m = a % b;
                    return m === 0 ? b : calculateEuclid(b, m);
                }(a, b)));
            }

            return Response.get();
        };

        this.iterative = function (a, b) {

            if (_gcd_validate(a, b)) {
                var gcd = Math.min(a, b);
                while (gcd > 1 && (a % gcd !== 0 || b % gcd !== 0)) {
                    gcd--;
                }
                Response.putResult(gcd);
            }

            return Response.get();
        };
    }]);