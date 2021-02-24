

export type UsersType = {
  data: UsersDataType[];
  isLoaded: boolean;
  error: Error | null
}

export type UsersDataType = {
  id: number;
  name: string
}