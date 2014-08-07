/**
 * Created by Agnislav Onufrijchuk on 07.08.2014.
 */

angular
    .module('algorithms')

    .factory('MyMath', [function() {
        return {
            sign: function (i) {
                return i > 0 ? 1 : i < 0 ? -1 : 0;
            }
        }
    }])

    .factory('Response', [function() {
        var _object     = {},
            _structure  = {
                result: null,
                error: ''
            }
            ;

        return {
            flush: function() {
                _object = {};
            },
            get: function() {
                return angular.extend({}, _structure, _object);
            },
            putResult: function(result) {
                _object.result = result;
            },
            logError: function(message) {
                _object.error = message;
            },
            isError: function() {
                return ('error' in _object && _object.error);
            }
        };
    }]);