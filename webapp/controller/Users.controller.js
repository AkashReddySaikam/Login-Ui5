
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("inflexion.controller.Users", {
        onInit: function () {
            console.log("Users Controller Loaded ");
            
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("model/users.json");
            this.getView().setModel(oModel);
        },

        onUserSelect: function (oEvent) {
            console.log(" onUserSelect Triggered!");
        
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        
            var oSelectedItem = oEvent.getParameter("listItem");
            if (!oSelectedItem) {
                console.error(" No list item selected");
                return;
            }
        
            var oContext = oSelectedItem.getBindingContext();
            if (!oContext) {
                console.error(" Context is null. Check if binding is correct.");
                return;
            }
        
            var sUserId = oContext.getProperty("id");
            console.log(" Selected User ID:", sUserId);
        
            if (oRouter) {
                console.log(" Navigating to userDetails...");
                oRouter.navTo("userDetails", { userId: sUserId });
            } else {
                console.error(" Router is not initialized.");
            }
        },
        onBackToHome: function () {
                   var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                   oRouter.navTo("login");
                      MessageToast.show("Navigating back to Home...");
                  }
        
    });
});

