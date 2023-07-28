export interface Notification
{
    id:number;
    text:string;
    priority:number; //0 for high  1 for moderate 2 for normal
    status:number;//0 for not done 1 for processing  2 for done
    
}