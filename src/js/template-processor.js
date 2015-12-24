console.log('template processor loaded!');
(function () {

    var templateProccessor = {

        controllers: null,

        changeView: function (data) {
            console.log('template processing start');
            $.get(this.controllers[data.href], function (response) {
                var contr = eval(response);
                var scope = {};
                scope = contr(scope);
                for (var v in scope) {
                    console.log(v, scope[v]);
                    data.content = data.content.replace('{{' + v + '}}', scope[v]);
                }
                $(document).trigger('template-processed', data.content);
            });
        },

        init: function (controlles) {
            console.log('template processor init');
            this.controllers = controlles;
            $(document).on('view-changed', function (e, data) {
                templateProccessor.changeView(data);
            });
        }

    }
    return templateProccessor;
})();