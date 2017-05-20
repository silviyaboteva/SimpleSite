'use strict';

class GalleryController {
    constructor(template) {
        this.template = template;
    }

    loadGalleryTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('gallery-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);
            });
    }
}
//# sourceMappingURL=galleryController.js.map
