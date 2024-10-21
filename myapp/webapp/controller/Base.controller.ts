import Model from "sap/ui/model/Model";
import AppComponent from "../Component"
import UIComponent from "sap/ui/core/UIComponent";
import Controller from "sap/ui/core/mvc/Controller";
import Router from "sap/ui/core/routing/Router";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import History from "sap/ui/core/routing/History";

export default abstract class BaseController extends Controller {
    public getOwnerComponent(): AppComponent {
		return super.getOwnerComponent() as AppComponent;
	}

    public getResourceBundle(): ResourceBundle | Promise<ResourceBundle> {
		const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel;
		return oModel.getResourceBundle();
	}

    public getRouter(): Router {
		return UIComponent.getRouterFor(this);
	}

    public getModel(sName?: string): Model | undefined {
		return this.getView()?.getModel(sName);
	}

    public setModel(oModel: Model, sName?: string): BaseController {
		this.getView()?.setModel(oModel, sName);
		return this;
	}     
    
    public navTo(sName: string, oParameters?: object, bReplace?: boolean): void {
		this.getRouter().navTo(sName, oParameters, undefined, bReplace);
	}

    public onNavBack(): void {
		const sPreviousHash = History.getInstance().getPreviousHash();
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.getRouter().navTo("main", {}, undefined, true);
		}
	}
}