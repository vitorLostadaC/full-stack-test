import { Container, Stack } from "@mui/material"
import { GET_BEERS, getBeers } from "../../services/BeerService/BeerServices"
import { SimpleTable } from "../../components/SimpleTable/SimpleTable"
import { Pagination } from "../../components/Pagination/Pagination"
import { useState } from "react"
import { GetBeersParamsSchema } from "../../services/BeerService/BeerService.schema"
import { useQuery } from "@tanstack/react-query"

export const HomePage = () => {
  const [params, setParams] = useState<GetBeersParamsSchema>({
    page: 1,
    per_page: 20
  })

  const getBeersQuery = useQuery({
    queryKey: [GET_BEERS, params],
    queryFn: () =>
      getBeers({
        page: params.page,
        per_page: params.per_page
      })
  })

  return (
    <Container
      component="main"
      sx={{
        p: "2rem 0",
        height: "100vh"
      }}
    >
      <Stack
        sx={{
          justifyContent: "space-between",
          gap: 2,
          height: "100%"
        }}
      >
        <SimpleTable
          columns={[
            {
              dataCellType: "name",
              headerCell: "Nome",
              width: "20%"
            },
            {
              dataCellType: "tagline",
              headerCell: "Tag",
              width: "20%"
            },
            {
              dataCellType: "first_brewed",
              headerCell: "Primeira fabricação",
              width: "20%"
            },
            {
              dataCellType: "attenuation_level",
              headerCell: "Nível de atenuação",
              width: "20%"
            },
            {
              dataCellType: "abv",
              headerCell: "Nível de atenuação",
              width: "20%"
            }
          ]}
          rows={getBeersQuery.data || []}
          footer="Cervejas"
          stickyFooter
        />
        <Pagination
          currentPage={params.page}
          onPageChange={(page) => setParams({ ...params, page })}
          quantityItemsPerPage={params.per_page}
          totalItems={325}
        />
      </Stack>
    </Container>
  )
}
