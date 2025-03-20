sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("inflexion.controller.Revenue", {
        
        onInit: function () {
            // Sample Revenue Data
            var revenueData = {
                totalRevenue: "2.3",
                monthlyRevenue: "0.35",
                RevenueData: [
                    { month: "Jan", revenue: 0.2 },
                    { month: "Feb", revenue: 0.25 },
                    { month: "Mar", revenue: 0.3 },
                    { month: "Apr", revenue: 0.28 },
                    { month: "May", revenue: 0.32 },
                    { month: "Jun", revenue: 0.35 },
                    { month: "Jul", revenue: 0.38 }
                ]
            };

            // Set Model
            var oModel = new JSONModel(revenueData);
            this.getView().setModel(oModel, "chart");
            this.getView().setModel(oModel, "$data");
        },

        onBackToDashboard: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("dashboard");
        }
        
             
    });
});
