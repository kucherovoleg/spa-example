console.log('first controller loaded!');
(function () {

    var firstController = function (scope) {
        scope.controllerName = 'first controller';
        return scope;
    }

    return firstController;
})();