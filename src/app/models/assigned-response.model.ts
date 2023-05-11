import { userAssigned } from "./userAssigned.model";

export interface AssignedResponse {
    id: number;
    Bloc: string;
    users: userAssigned[];
  }