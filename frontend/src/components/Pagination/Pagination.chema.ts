export interface PaginationPropsSchema {
  totalItems: number
  quantityItemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}
