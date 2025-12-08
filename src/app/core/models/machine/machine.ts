import { EcbmDto } from "../ecbm/ecbm-dto";
import { MachineDto } from "./machine-dto";

export class Machine implements MachineDto {
    constructor(
        public id: string,
        public ecbms: EcbmDto[],
        public serialNo: string,
        public orderNo: string,
        public machineClass: string,
        public customer: string,
        public createdBy: string,
        public updatedBy: string,
        public createdAt: string,
        public updatedAt: string,
    ) {
        
    }
}