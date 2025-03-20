sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
    "use strict";

    return UIComponent.extend("inflexion.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            jQuery.sap.includeStyleSheet("css/styles.css");
            this.getRouter().initialize();  // Ensure router is initialized
        }
    });
});

