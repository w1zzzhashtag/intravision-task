import { BidsDataType } from "../commonTypes"


export type BidsType = {
  data: BidsDataType[];
  isLoaded: boolean;
  error: Error | null
}

export type getDataType = {
  ['@odata.context']: string;
  value: BidsDataType[]
}