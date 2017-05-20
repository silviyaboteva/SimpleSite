'use strict';

class StorageController {
    constructor(template) {
        this.template = template;
    }

    loadStorageTemplate(content, context) {
        var $content = content;
        var _this = this;

        this.template.getTemplate('storage-template')
            .then((resultTemplate) => {
                $content.html(resultTemplate);
            });
    }
}
//# sourceMappingURL=storageController.js.map
