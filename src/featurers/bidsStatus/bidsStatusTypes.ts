

export type BidsStatusType = {
  data: BidsStatusDataType[];
  isLoaded: boolean;
  error: Error | null;
}

export type BidsStatusDataType = {
  rgb: string;
  id: number;
  name: string;
}