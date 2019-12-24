sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/myapp/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, formatter, MessageToast, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("opensap.myapp.controller.App", {
		
		formatter : formatter,

		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},
		
		onItemSelected: function(oEvent) {
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("productDetailsPanel");
			
			oProductDetailPanel.bindElement({ path: sPath });
			this.byId("productDetailsPanel").setVisible(true);
		},
		
		onFilterProducts : function(oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			var oList = this.getView().byId("productsList");
			var oBinding = oList.getBinding("items");
			
			if (sQuery) {
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			
			oBinding.filter(aFilter);
		}
	});
});