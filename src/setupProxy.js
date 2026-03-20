const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/notebooks',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
            secure: false,
            bypass: (req) => {
                // Only bypass for notebook files
                if (req.url.match(/\.ipynb|\.json$/)) {
                    return req.url;
                }
                return null;
            }
        })
    );
};