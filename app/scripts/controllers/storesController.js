'use strict';

class StoresController {
    constructor(template) {
        this.template = template;
    }

    loadStoresTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('stores-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);
            });
    }
}