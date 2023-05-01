import HeadsetsGateway from "./HeadsetsGateway";

export default class HeadsetsService{
    static getAllHeadsets(){
        return new HeadsetsGateway().getAllHeadsets();
    }
    static getOneHeadset(id){
        return new HeadsetsGateway().getOneHeadset(id);
    }
}