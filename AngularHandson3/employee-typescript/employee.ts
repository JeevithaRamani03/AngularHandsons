import {Skill} from "./skills";
import {Department} from "./department";
export interface Employee{
    id:number;
    name:string;
    salary:number;
    permanent:boolean;
    department:Department;
    skills:Skill[];


}
