import { CircularProgress, Modal, Stack } from "@mui/material"
import { useIsFetching, useIsMutating } from "@tanstack/react-query"
import { useState, useEffect } from "react"

export const Loader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const excludeKeys: string[] = []

  const isFetching = useIsFetching({
    predicate: (query) =>
      query.state.status === "loading" &&
      !excludeKeys.find((excludeKey) =>
        query.queryKey.find((key) => excludeKey === key)
      )
  })

  const excludeMutationKeys: string[] = []

  const isMutating = useIsMutating({
    predicate: (mutation) =>
      mutation.state.status === "loading" &&
      !excludeMutationKeys.find(
        (excludeKey) =>
          mutation.options.mutationKey?.find((key) => excludeKey === key)
      )
  })

  useEffect(() => {
    if (isFetching > 0 || isMutating > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [isFetching, isMutating])

  return (
    <Modal className="LoadingModal" open={isOpen}>
      <Stack
        sx={(theme) => ({
          height: "100vh",
          justifyContent: "center",
          alignItems: "center"
        })}
      >
        <CircularProgress sx={{ color: "#fff" }} />
      </Stack>
    </Modal>
  )
}
