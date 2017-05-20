'use strict';

var router = Sammy('#content', function() {
    let $content = $('#content');

    let template = new HandlebarsTemplate();

    let homeController = new HomeController(template);
    let storesController = new StoresController(template);
    let storageController = new StorageController(template);
    let galleryController = new GalleryController(template);
    let contactController = new ContactController(template);

    this.get('/', function(context) {
        context.redirect('#/home');
    });

    this.get('#/home', function(context) {
        homeController.loadHomeTemplate($content, context);
    });

    this.get('#/stores', function(context) {
        storesController.loadStoresTemplate($content, context);
    });

    this.get('#/storage', function(context) {
        storageController.loadStorageTemplate($content, context);
    });

    this.get('#/gallery', function(context) {
        galleryController.loadGalleryTemplate($content, context);
    });

    this.get('#/contact', function(context) {
        contactController.loadContactTemplate($content, context);
    });

});

router.run('#/');