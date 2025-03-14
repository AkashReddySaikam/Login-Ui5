sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("inflexion.controller.Dashboard", {
        onProducts: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("products");
            MessageToast.show("Navigating to Products Page...");
        },

        onNavigateToUsers: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("users");
            MessageToast.show("Navigating to Users Page...");
        },
        onLogout: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("login");
            MessageToast.show("Logged out successfully!");
        },
        onEmployee: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("gridTable");
            MessageToast.show("Logged out successfully!");
        }
    });
});


