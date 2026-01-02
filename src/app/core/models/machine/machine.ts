import { Ecbm } from "../ecbm/ecbm";
import { MachineClass } from "./machine-classes";

export interface Machine  {
    id: string;
    serialNo: string;
    orderNo: string;
    customer: string;
    machineClass: MachineClass;

    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    
    ecbms: Ecbm[];
}