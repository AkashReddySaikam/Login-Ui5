// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
// ], function (Controller, MessageToast) {
//     "use strict";

//     return Controller.extend("inflexion.controller.Dashboard", {
//         onProducts: function () {
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             oRouter.navTo("products");
//             MessageToast.show("Navigating to Products Page...");
//         },

//         onNavigateToUsers: function () {
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             oRouter.navTo("users");
//             MessageToast.show("Navigating to Users Page...");
//         },
//         onLogout: function () {
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             oRouter.navTo("login");
//             MessageToast.show("Logged out successfully!");
//         },
//         onEmployee: function () {
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             oRouter.navTo("gridTable");
//             MessageToast.show("Logged out successfully!");
//         }
//     });
// });
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("inflexion.controller.Dashboard", {
        onInit: function () {
            // Create and set models for the dashboard
            this._initModels();
            
            // Initialize chart data
            this._initChartData();
        },
        
        _initModels: function() {
            // Create and set the models for UI elements
            var oUserModel = new JSONModel({
                name: "Akash",
                email: "ak@example.com",
                lastLogin: "13 March 2025",
                role: "Developer"
            });
            
            var oStatsModel = new JSONModel({
                productViews: 312,
                userSessions: 136,
                averageSales: 3076.25
            });
            
            var oProductsModel = new JSONModel({
                products: [
                    { name: "Laptop", category: "Electronics", count: 1863 },
                    { name: "Smartphone", category: "Electronics", count: 1420 },
                    { name: "Headphones", category: "Audio", count: 982 }
                ]
            });
            
            var oUsersModel = new JSONModel({
                activeUsers: 420,
                newRegistrations: 86,
                premiumUsers: 175
            });
            
            var oEmployeesModel = new JSONModel({
                salesTeam: 245,
                supportTeam: 186,
                developmentTeam: 261
            });
            
            // Set models to view
            this.getView().setModel(oUserModel, "userModel");
            this.getView().setModel(oStatsModel, "statsModel");
            this.getView().setModel(oProductsModel, "productsModel");
            this.getView().setModel(oUsersModel, "usersModel");
            this.getView().setModel(oEmployeesModel, "employeesModel");
        },
        
        _initChartData: function() {
            // Create data for the chart
            var oChartModel = new JSONModel({
                businessData: [
                    { month: "Jan", products: 1500, users: 950, revenue: 1.8 },
                    { month: "Feb", products: 1600, users: 1000, revenue: 1.9 },
                    { month: "Mar", products: 1700, users: 1050, revenue: 2.0 },
                    { month: "Apr", products: 1800, users: 1100, revenue: 2.1 },
                    { month: "May", products: 1900, users: 1150, revenue: 2.2 },
                    { month: "Jun", products: 2000, users: 1200, revenue: 2.3 },
                    { month: "Jul", products: 2100, users: 1228, revenue: 2.3 }
                ]
            });
            
            // Set the model to the view
            this.getView().setModel(oChartModel);
        },
        
        // Navigation functions
        onProducts: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("products");
            MessageToast.show("Navigating to Products...");
        },
        
        onNavigateToUsers: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("users");
            MessageToast.show("Navigating to Users...");
        },
        
        onEmployee: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("gridTable");
            MessageToast.show("Navigating to Employees...");
        },
       
        OnRevenue: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("reve");
            MessageToast.show("Navigating to Revenue...");
        },
        
        // Action handlers
        onRefreshData: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            
            oRouter.navTo("dashboard"); // Force re-navigation
            MessageToast.show("Refreshing Dashboard...");
        },
        
        
        
        onOpenSettings: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("settings");
        },
        
        onLogout: function() {
            MessageBox.confirm("Are you sure you want to logout?", {
                title: "Logout Confirmation",
                onClose: function(oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        // Navigate to login page
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("login");
                        MessageToast.show("Logging out...");
                    }
                }.bind(this)
            });
        }
    });
});


