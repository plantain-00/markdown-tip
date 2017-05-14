module.exports = {
    inputFiles: [
        "demo/*.bundle.js",
        "demo/*.css",
        "demo/*.png",
        "demo/**/*.ejs.html",
    ],
    excludeFiles: [
        "demo/*-*.*",
    ],
    outputFiles: file => file.replace(".ejs", ""),
    json: false,
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
    customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
    noOutputFiles: [],
    es6: false,
    less: false,
    scss: false,
};
