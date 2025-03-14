sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("inflexion.controller.Main", {
        onInit: function () {
            console.log("Main Page Loaded"); // ✅ Debugging
        }
    });
});


