sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("inflexion.controller.Products", {
        onInit: function () {
            // Load the products.json file
            var oModel = new JSONModel(sap.ui.require.toUrl("inflexion/model/products.json"));
            this.getView().setModel(oModel);
        },
        onBackToHome: function () {
            // Navigate to the Login page
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("dashboard");
            MessageToast.show("Navigating back to Home...");
        }
    });
});