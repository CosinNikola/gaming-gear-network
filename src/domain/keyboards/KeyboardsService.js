import KeyboardsGateway from "./KeyboardsGateway";

export default class KeyboardsService{
    static getAllKeyboards(){
        return new KeyboardsGateway().getAllKeyboards();
    }
    static getOneKeyboard(id){
        return new KeyboardsGateway().getOneKeyboard(id);
    }
}