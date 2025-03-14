sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("inflexion.controller.Signup", {
        onSignUp: function () {
            var name = this.getView().byId("nameInput").getValue();
            var email = this.getView().byId("emailInput").getValue();
            var password = this.getView().byId("passwordInput").getValue();
            var contact = this.getView().byId("contactInput").getValue();

            if (!name || !email || !password || !contact) {
                sap.m.MessageToast.show("All fields are required!");
                return;
            }

            var userData = {
                name: name,
                email: email,
                password: password,
                contact: contact
            };

            localStorage.setItem(email, JSON.stringify(userData));
            sap.m.MessageToast.show("Sign-up Successful! Please Login.");

            // Navigate back to Login View after successful signup
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("login");
        },

        onNavigateToLogin: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("login");
        }
    });
});

