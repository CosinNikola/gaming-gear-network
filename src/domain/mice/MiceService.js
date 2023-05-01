import MiceGateway from "./MiceGateway";

export default class MiceService{
    static getAllMice(){
        return new MiceGateway().getAllMice();
    }
    static getOneMouse(id){
        return new MiceGateway().getOneMouse(id);
    }
}