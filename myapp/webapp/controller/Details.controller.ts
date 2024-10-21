import MessageBox from "sap/m/MessageBox";
import BaseController from "./Base.controller";

export default class DetailsController extends BaseController {
    public sayHello(): void {
        MessageBox.show("Hello world Details!")
    }

    public goBack(): void {
        this.onNavBack()
    }
} 