// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = {
        production: false,
        apiUrl: 'http://api.medik.ly/',
        clientSecret: 'xGBUCOjESeWpMz95IJb6VepuYxmSliPR4yCZSYm2',
        clientId: '2',
        googleMapApiKey: 'AIzaSyACLBEMy6EwcBExWTrH1i25FzPMlkeM7f4',
    };
});
//# sourceMappingURL=environment.js.map