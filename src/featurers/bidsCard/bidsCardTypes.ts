import { BidsDataType } from "../commonTypes";


export type BidsCardType = {
  data: BidsCardDataType | null;
  isLoaded: boolean;
  error: Error | null;
  putBidsCardIsComplete: boolean
}

export interface BidsCardDataType extends BidsDataType {
  lifetimeItems: BidsCardDataTypeLifetimeItems[]
}

export type BidsCardDataTypeLifetimeItems = {
  comment: string;
  createdAt: string;
  fieldName: null;
  id: number;
  lifetimeType: number;
  newFieldValue: null;
  oldFieldValue: null;
  userName: string;
}

export type PutBidsCardDataType = {
  id: number;
  name: string;
  description: string;
  comment: string;
  price: number;
  taskTypeId: number;
  statusId: number;
  priorityId: number;
  serviceId: number;
  resolutionDatePlan: string;
  tags: number[],
  initiatorId: number;
  executorId: number;
  executorGroupId: number;
}
