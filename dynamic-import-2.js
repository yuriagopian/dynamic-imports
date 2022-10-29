import('</url-to-module.js>').then(
    (module) => {
        //  Do something with the module
    }
).catch(
    (error) => {
        // handle the case where module didn't load or something went wrong
    }
);