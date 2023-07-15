import { Stack, Typography } from "@mui/material"
import { PaginationPropsSchema } from "./Pagination.chema"
import { PaginationItem } from "./components/PaginationItem/PaginationItem"
import { generatePagesArray } from "./utils/utils"

/**
 * Quantity siblings renders
 * @example
 * 1 being the current page
 * SIBLINGS_COUNT = 2 => 1 `2` `3` ... 10
 * SIBLINGS_COUNT = 1 => 1 `2` ... 10
 */
const SIBLINGS_COUNT = 1

export function Pagination({
  totalItems,
  currentPage,
  onPageChange,
  quantityItemsPerPage
}: PaginationPropsSchema) {
  const lastPage = Math.ceil(totalItems / quantityItemsPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + SIBLINGS_COUNT, lastPage)
        )
      : []

  return (
    <Stack sx={{ gap: 2, mx: "auto", alignItems: "center" }} direction={"row"}>
      {currentPage > 1 + SIBLINGS_COUNT && (
        <>
          <PaginationItem selectPage={onPageChange} pageNumber={1} />
          {currentPage > 2 + SIBLINGS_COUNT && <p className="px-2"> ...</p>}
        </>
      )}
      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem
            selectPage={onPageChange}
            key={page}
            pageNumber={page}
          />
        ))}
      <PaginationItem
        selectPage={onPageChange}
        pageNumber={currentPage}
        isSelected
      />
      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            selectPage={onPageChange}
            key={page}
            pageNumber={page}
          />
        ))}
      {currentPage + SIBLINGS_COUNT < lastPage && (
        <>
          {currentPage + 1 + SIBLINGS_COUNT < lastPage && (
            <p className="px-2"> ...</p>
          )}
          <PaginationItem selectPage={onPageChange} pageNumber={lastPage} />
        </>
      )}
    </Stack>
  )
}
