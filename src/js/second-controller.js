console.log('second controller loaded!');
(function () {

    var secondController = function (scope) {
        scope.controllerName = 'second controller';
        return scope;
    }

    return secondController;
})();