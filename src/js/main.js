var app = {

    params: {
        views: {
            'first-view': 'templates/first-view.html',
            'second-view': 'templates/second-view.html',
            'third-view': 'templates/third-view.html'
        },
        controllers: {
            'first-view': 'js/first-controller.js',
            'second-view': 'js/second-controller.js',
            'third-view': 'js/first-controller.js'
        }
    },

    modules: {
        router: {
            name: 'router',
            ref: 'js/router.js'
        },
        templateProcessor: {
            name: 'template-processor',
            ref: 'js/template-processor.js'
        }
    },

    registerModule: function (module, obj) {
        switch (module) {
            case 'router':
                obj.init(this.params.views);
                break;
            case 'template-processor':
                obj.init(this.params.controllers);
                break;
            default:
                throw 'Unknown module';
        }
    },

    initModule: function (module) {
        $.get(module.ref, function (response) {
            var obj = eval(response);
            app.registerModule(module.name, obj);
        });
    },

    init: function () {
        console.log('init app');
        for (var m in this.modules) {
            this.initModule(this.modules[m]);
        }
    }

}

$(function () {
    app.init();
});