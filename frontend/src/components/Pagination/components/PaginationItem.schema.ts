export interface PaginationItemPropsSchema {
  pageNumber: number
  isSelected?: boolean
  selectPage: (page: number) => void
}
