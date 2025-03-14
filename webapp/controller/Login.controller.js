sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("inflexion.controller.Login", {
        onInit: function () {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        },

        onLogin: function () {
            console.log("Login button clicked");

            var username = this.getView().byId("userId").getValue();
            var password = this.getView().byId("password").getValue();

            console.log("Username:", username, "Password:", password);

            if (username && password) {  
                console.log("Navigation to dashboard");
                sap.m.MessageToast.show("Login Successful!");
                const oRouter = this.getOwnerComponent().getRouter();
                if (oRouter) {
                    oRouter.navTo("dashboard");  // Ensure "Dashboard" matches manifest.json
                } else {
                    console.error("Router is not initialized");
                }
            } else {
                sap.m.MessageToast.show("Please enter a username and password!");
            }
        },

        onNavigateToSignup: function () {
            console.log("Sign Up button clicked");
        
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            
            if (oRouter) {
                console.log("Navigating to signup...");
                oRouter.navTo("signup");  
            } else {
                console.error("Router is not initialized properly.");
            }
        }
        
        
    });
});
