module.exports = {
    apps: [{
        name: "cabinet-web",
        script: "artisan",
        args: "serve --host=127.0.0.1 --port=8005",
        interpreter: "php"
    }]
};
