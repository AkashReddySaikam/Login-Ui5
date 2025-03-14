sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("inflexion.controller.UserDetails", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("userDetails").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var sUserId = oEvent.getParameter("arguments").userId;
            console.log("Navigated with User ID:", sUserId);

            var oModel = new JSONModel("model/users.json");
            var that = this;

            oModel.attachRequestCompleted(function () {
                var aUsers = oModel.getProperty("/users");
                var oUser = aUsers.find(user => user.id === sUserId);

                if (oUser) {
                    console.log("User Found:", oUser); 
                    var oUserModel = new JSONModel(oUser);
                    that.getView().setModel(oUserModel);
                } else {
                    console.error("User not found.");
                }
                
                
            });

            oModel.attachRequestFailed(function () {
                console.error("Failed to load user data.");
            });
        },
        onBackToUsers: function () {
       var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
       oRouter.navTo("users");
          MessageToast.show("Navigating back to User...");
      }
    });
});

