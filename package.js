
Package.describe({
    name: 'lucendio:TODO',
    summary: 'TODO',
    version: '0.1.0',
    git: 'https://github.com/lucendio/meteor-package.git',
    documentation: 'README.md'
});




Package.onUse( function( api ){

    api.versionsFrom('1.0.0');


    api.use([
        'underscore'
    ], ['server', 'client']); //shared


    api.use([
        'http',
        'tracker',
        'templating'
    ], 'client');


    api.use([

    ], 'server');



    api.export([

    ], ['server', 'client']);  //shared


    api.export([

    ], 'client');


    api.export([

    ], 'server');



    api.imply([], ['server', 'client']);


    api.imply([], 'client');


    api.imply([], 'server');



    api.addFiles([
        'shared/lib/TODO',
        'shared/lib/polyfills/TODO',
        'shared/lib/vendors/TODO',
        'shared/collections/TODO',
        'shared/routes/TODO',
        'shared/main.js'
    ], ['server', 'client']);


    api.addFiles([

    ], 'client');


    api.addFiles([
        'server/lib/TODO',
        'server/lib/polyfills/TODO',
        'server/lib/vendors/TODO',
        'server/collections/TODO',
        'server/allow-deny-rules/TODO',
        'server/publications/TODO',
        'server/remote-methods/TODO',
        'server/routes/TODO',
        'server/main.js'
    ], 'server');


    /**
     * assets
     */
    api.addFiles([
        'private/TODO'
    ], ['server'], {isAsset: true});

});




Package.onTest(function (api) {

});