sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("opensap.learn-ui5.controller.App", {
		onShowHello: function () {
			// read message from i18n file
			var bundle = this.getView().getModel("i18n").getResourceBundle();	
			var recipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var message = bundle.getText("helloMsg", [recipient]);
			
			// display message
			MessageToast.show(message);
		}
	});
});