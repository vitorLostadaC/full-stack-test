import { Container } from "@mui/material"
import { useQuery } from "react-query"
import { GET_BEERS, getBeers } from "../../services/BeerService/BeerServices"
import { SimpleTable } from "../../components/SimpleTable/SimpleTable"

export const HomePage = () => {
  const getBeersQuery = useQuery({
    queryKey: [GET_BEERS],
    queryFn: () =>
      getBeers({
        page: 1,
        perPage: 1
      })
  })

  return (
    <Container component="main">
      <SimpleTable
        columns={[
          {
            dataCellType: "name",
            headerCell: "Nome"
          },
          {
            dataCellType: "tagline",
            headerCell: "Tag"
          },
          {
            dataCellType: "first_brewed",
            headerCell: "Primeira fabricação"
          },
          {
            dataCellType: "attenuation_level",
            headerCell: "Nível de atenuação"
          }
        ]}
        rows={getBeersQuery.data || []}
      />
    </Container>
  )
}
