sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("inflexion.controller.Settings", {

        onInit: function () {
            // Load settings from backend or local storage
            this.loadUserSettings();
        },

        loadUserSettings: function () {
            // Example: Fetching user settings (replace with API call)
            let userSettings = {
                privacy: "public",
                notifications: true,
                language: "en",
                theme: "light"
            };

            this.getView().byId("privacyToggle").setSelectedButton(
                userSettings.privacy === "public" ? 
                this.getView().byId("privacyToggle").getButtons()[0] : 
                this.getView().byId("privacyToggle").getButtons()[1]
            );

            this.getView().byId("notificationSwitch").setState(userSettings.notifications);
            this.getView().byId("languageSelect").setSelectedKey(userSettings.language);
            this.getView().byId("themeToggle").setSelectedButton(
                userSettings.theme === "light" ? 
                this.getView().byId("themeToggle").getButtons()[0] : 
                this.getView().byId("themeToggle").getButtons()[1]
            );
        },

        onSaveSettings: function () {
            let privacy = this.getView().byId("privacyToggle").getSelectedButton().getCustomData()[0].getValue();
            let notifications = this.getView().byId("notificationSwitch").getState();
            let language = this.getView().byId("languageSelect").getSelectedKey();
            let theme = this.getView().byId("themeToggle").getSelectedButton().getCustomData()[0].getValue();
            let currentPassword = this.getView().byId("currentPassword").getValue();
            let newPassword = this.getView().byId("newPassword").getValue();
            let confirmPassword = this.getView().byId("confirmPassword").getValue();

            if (newPassword && newPassword !== confirmPassword) {
                MessageToast.show("New password and confirm password do not match!");
                return;
            }

            let updatedSettings = {
                privacy,
                notifications,
                language,
                theme,
                newPassword: newPassword || null
            };

            console.log("Updated User Settings:", updatedSettings);
            MessageToast.show("Settings saved successfully!");
        },

        onBackToDashboard: function () {
            sap.ui.core.UIComponent.getRouterFor(this).navTo("dashboard");
        }
    });
});
