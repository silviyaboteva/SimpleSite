'use strict'

class ContactController {
    constructor(template) {
        this.template = template;
    }

    loadContactTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('contact-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);
            });
    }
}
//# sourceMappingURL=contactController.js.map
