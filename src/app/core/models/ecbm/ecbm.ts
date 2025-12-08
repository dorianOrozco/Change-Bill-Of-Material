import { EcbmDto } from "./ecbm-dto";
import { EcbmSection, EcbmStage, EcbmState } from "./ecbm-enums";

export class Ecbm implements EcbmDto {
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
        public notes?: string
    ) {}


    // Convert object to dto for pocketbase (since it only accepts objects not classes)
    toDto(): EcbmDto {
        return {
            id: this.id,
            machineId: this.machineId,
            materialNo: this.materialNo,
            component: this.component,
            description: this.description,
            quantity: this.quantity,
            section: this.section,
            stage: this.stage,
            state: this.state,
            reason: this.reason,
            action: this.action,
            forwardedTo: this.forwardedTo,
            forwardedBy: this.forwardedBy,
            createdBy: this.createdBy,
            updatedBy: this.updatedBy,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            notes: this.notes
        }
    }
}