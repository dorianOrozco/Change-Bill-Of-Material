import { EcbmSection, EcbmStage, EcbmState } from "./ecbm-enums";

// DTO stores the information retrieved from PocketBase
export interface EcbmDto {
    id: string;
    machineId: string;

    materialNo: string;
    component: string;
    description: string;
    quantity: number;
    notes?: string;

    section: EcbmSection;
    stage: EcbmStage;
    state: EcbmState;
    
    reason: string;
    action: string;

    forwardedTo: string;
    forwardedBy: string;

    createdBy: string;
    updatedBy: string;

    createdAt: string;
    updatedAt: string;
}