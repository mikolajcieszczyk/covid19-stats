export interface IData {
  [key: string]: any
}

export interface IGlobalState {
  loading: boolean
  data: IData[]
  error: string | undefined
}
