



export type BidsDataType = {
  id: number;
  name: string;
  statusId: number
  statusName: string;
  statusRgb: string;
  executorGroupId: number
  executorGroupName: string;
  executorId: number
  executorName: string;
  createdAt: Date;
  description: string;
  initiatorId: number;
  initiatorName: string;
  price: number;
  priorityId: number;
  priorityName: string;
  resolutionDatePlan: string;
  serviceId: number;
  serviceName: string;
  tags: BidsDataTagsType[];
  taskTypeId: number;
  taskTypeName: string;
  updatedAt: Date
}


export type BidsDataTagsType = {
  id: number;
  name: string;
}