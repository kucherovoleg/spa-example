console.log('router loaded!');
(function () {

    var router = {

        templates: null,

        replaceTemplate: function (content) {
            $('[template-container]').html(content);
        },

        changeView: function (href) {
            console.log('link click: ' + href + ', ' + this.templates[href]);
            window.history.pushState(href, href, href);
            $.get(this.templates[href], function (response) {
                $(document).trigger('view-changed', {href: href, content: response});
            });
        },

        initRefs: function () {
            $('[template-href]').off('click').on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                router.changeView($(this).attr('href'));
            });
        },

        init: function (templates) {
            console.log('router init');
            this.templates = templates;
            this.initRefs();
            $(document).on('template-processed', function (e, content) {
                router.replaceTemplate(content);
                router.initRefs();
            });
        }

    }

    return router;
})();