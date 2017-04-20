'use strict';

class HomeController {
    constructor(template) {
        this.template = template;
    }

    loadHomeTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('home-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);
            });
    }
}