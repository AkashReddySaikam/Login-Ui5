// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], function (Controller) {
//     "use strict";

//     return Controller.extend("inflexion.controller.Signup", {
//         onSignUp: function () {
//             var name = this.getView().byId("nameInput").getValue();
//             var email = this.getView().byId("emailInput").getValue();
//             var password = this.getView().byId("passwordInput").getValue();
//             var contact = this.getView().byId("contactInput").getValue();

//             if (!name || !email || !password || !contact) {
//                 sap.m.MessageToast.show("All fields are required!");
//                 return;
//             }

//             var userData = {
//                 name: name,
//                 email: email,
//                 password: password,
//                 contact: contact
//             };

//             localStorage.setItem(email, JSON.stringify(userData));
//             sap.m.MessageToast.show("Sign-up Successful! Please Login.");

//             // Navigate back to Login View after successful signup
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             oRouter.navTo("login");
//         },

//         onNavigateToLogin: function () {
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             oRouter.navTo("login");
//         }
//     });
// });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("inflexion.controller.Signup", {
        onSignUp: function () {
            var sName = this.getView().byId("nameInput").getValue();
            var sEmail = this.getView().byId("emailInput").getValue();
            var sPassword = this.getView().byId("passwordInput").getValue();
            var sContact = this.getView().byId("contactInput").getValue();

            if (!sName || !sEmail || !sPassword || !sContact) {
                MessageToast.show("All fields are required!");
                return;
            }

            // Simulate saving user data (replace this with backend call)
            var oNewUser = {
                name: sName,
                email: sEmail,
                password: sPassword,
                contact: sContact
            };

            console.log("User Registered:", oNewUser);
            MessageToast.show("Sign-up successful!");

            // Redirect to Login Page
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("login");
        },

        onNavigateToLogin: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("login");
        }
    });
});




