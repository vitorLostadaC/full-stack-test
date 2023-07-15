import { Button } from "@mui/material"
import { PaginationItemPropsSchema } from "../PaginationItem.schema"
import { theme } from "../../../../styles/theme"

export function PaginationItem({
  isSelected = false,
  pageNumber,
  selectPage
}: PaginationItemPropsSchema) {
  if (isSelected)
    return (
      <Button
        variant="text"
        sx={{
          borderRadius: 2,
          border: `1px solid ${theme.palette.primary.main}`,
          fontWeight: 700,
          color: `${theme.palette.primary.main} !important`,
          minWidth: "48px !important"
        }}
        disabled
      >
        {pageNumber}
      </Button>
    )

  return (
    <Button
      sx={{ minWidth: "48px" }}
      variant="text"
      onClick={() => selectPage(pageNumber)}
    >
      {pageNumber}
    </Button>
  )
}
