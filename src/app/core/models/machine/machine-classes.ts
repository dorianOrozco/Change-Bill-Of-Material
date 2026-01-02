import { Machine } from "./machine";

export interface MachineClass {
    id: string;
    class: string;
    machines: Machine[];
    createdBy: string;
    updatedBy: string;
    created: string;
    updated: string;   
}