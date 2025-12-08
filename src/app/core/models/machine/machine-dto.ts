import { EcbmDto } from "../ecbm/ecbm-dto";

export interface MachineDto {
    id: string;
    ecbms: EcbmDto[],

    serialNo: string,
    orderNo: string,
    machineClass: string; 
    customer: string,


    createdBy: string,
    updatedBy: string,
    createdAt: string,
    updatedAt: string
}