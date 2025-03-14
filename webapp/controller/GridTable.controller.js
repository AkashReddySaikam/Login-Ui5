// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/m/MessageToast",
//     "sap/ui/core/UIComponent"
// ], function (Controller, JSONModel, MessageToast, UIComponent) {
//     "use strict";

//     return Controller.extend("inflexion.controller.GridTable", {
//         onInit: function () {
//             // Load employee data
//             var oEmployeeModel = new JSONModel("model/employees.json");
//             this.getView().setModel(oEmployeeModel);

//             // Fetch locations from an API
//             this._fetchLocations();
//         },

//         _fetchLocations: function () {
//             var oModel = new JSONModel();
//             var that = this;

//             // API call to fetch locations dynamically
//             $.ajax({
//                 url: "https://nominatim.openstreetmap.org/search?country=India&format=json&limit=100",
//                 method: "GET",
//                 success: function (data) {
//                     // Check if data is returned
//                     if (!data || data.length === 0) {
//                         console.error("No data returned from the API.");
//                         return;
//                     }

//                     // Extract only city names from API response
//                     var aLocations = data.map(function (item) {
//                         return { location: item.display_name.split(",")[0] };
//                     });

//                     // Add a default option for Bangalore
//                     aLocations.unshift({ location: "Bangalore" });

//                     // Store locations in the model
//                     oModel.setData({ locations: aLocations });

//                     // Set locations model to the view
//                     that.getView().setModel(oModel, "locationModel");

//                     // Set the default selected value to Bangalore
//                     var oComboBox = that.byId("cityComboBox");
//                     if (oComboBox) {
//                         oComboBox.setSelectedKey("Bangalore");
//                     }

//                     console.log("Fetched Locations:", aLocations);
//                 },
//                 error: function (err) {
//                     console.error("Error fetching locations:", err);
//                     MessageToast.show("Failed to fetch locations. Please try again later.");
//                 }
//             });
//         },

//         onBackToHome: function () {
//             // Navigate back to the login page
//             var oRouter = UIComponent.getRouterFor(this);
//             oRouter.navTo("login");
//             MessageToast.show("Navigating back to Home...");
//         }
//     });
// });
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("inflexion.controller.GridTable", {
        onInit: function () {
            var oModel = new JSONModel("model/employees.json");
            var that = this;

            // Load JSON data
            oModel.attachRequestCompleted(function () {
                var oData = oModel.getData();
                
                // Extract all locations from employee data (NOT unique, use full list)
                var allLocations = oData.employees.map(emp => ({ location: emp.location }));

                // Add the full locations list to the model
                oData.locations = allLocations;
                
                // Update Model with all locations
                oModel.setData(oData);
                that.getView().setModel(oModel);
            });
        },

        onRowSelect: function (oEvent) {
            var oTable = this.getView().byId("gridTable");
            var aSelectedIndices = oTable.getSelectedIndices();

            if (aSelectedIndices.length > 0) {
                MessageToast.show("Selected Rows: " + aSelectedIndices.length);
            }
        },

        onBackToHome: function () {
            // Navigate to the Login page
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("login");
            MessageToast.show("Navigating back to Home...");
        }
    });
});
