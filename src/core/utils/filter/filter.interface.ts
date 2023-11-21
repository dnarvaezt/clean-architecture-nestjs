import { FilterLogicalOperatorEnum, FilterOperatorEnum, SortEnum } from './filter.enums'

export type IFilterArgs = Record<
  string,
  { operator: FilterOperatorEnum; value: any; primary?: boolean }
>

export interface IFilterOrder {
  key: string
  sort: SortEnum
}

export interface IFilterPage {
  start: number
  end: number
  length?: number
  pageIndex?: number
  pageSize?: number
  totalPages?: number
}

export interface IFilter {
  args?: IFilterArgs
  logicalOperator?: FilterLogicalOperatorEnum
  order?: IFilterOrder
  page?: IFilterPage
  pageFrom?: number
  pageTo?: number
}
