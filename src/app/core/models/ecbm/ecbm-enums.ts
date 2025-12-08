export enum EcbmSection {
    Added = 'Added',
    Removed = 'Removed',
    Modified = 'Modified'
}

export enum EcbmStage {
    Engineer = 'Engineer',
    Production = 'Production',
    PIC = 'PIC',
    Procurement = 'Procurement'
}

export enum EcbmState {
    Draft = 'Draft',
    Active = 'Active',
    Complete = 'Completed',
    Void = 'Voided'
}

export interface EcbmAction {
    id: string,
    action: string,
    
    createdBy: string,
    updatedBy: string,
    createdAt: string,
    updatedAt: string
}

export interface EcbmReason {
    id: string,
    reason: string,
    
    createdBy: string,
    updatedBy: string,
    createdAt: string,
    updatedAt: string
}