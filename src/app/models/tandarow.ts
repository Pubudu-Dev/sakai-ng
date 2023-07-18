import { Stage } from "./stages";


export interface TandARow{
    id:number;
    style:number;
    customer:string;
    description:string;
    sketch:string;
    garment_tech_name:string;   //employee id of garment tech
    garment_tech_avatar:string;//avatar of garment tech
    stages:Stage[];
}
