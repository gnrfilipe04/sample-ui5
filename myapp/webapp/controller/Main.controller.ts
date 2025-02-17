import MessageBox from "sap/m/MessageBox";
import BaseController from "./Base.controller";

export default class Main extends BaseController {
    public sayHello(): void {
        MessageBox.show("Hello world!")
    }

    public toDetails(): void {
        this.navTo("details")
    }
}