import { Machine } from "../machine/machine";
import { EcbmSection, EcbmStage, EcbmState } from "./ecbm-enums";

export class Ecbm {
    constructor(
        public id: string,
        public machineId: string,
        public materialNo: string,
        public component: string,
        public description: string,
        public quantity: number,
        public section: EcbmSection,
        public stage: EcbmStage = EcbmStage.Engineer, // By default starts with engineer
        public state: EcbmState,
        public reason: string,
        public action: string,
        public forwardedTo: string,
        public forwardedBy: string,
        public createdBy: string,
        public updatedBy: string,
        public createdAt: string,
        public updatedAt: string,
        public notes?: string,
        public machine?: Machine,
    ) {}
}