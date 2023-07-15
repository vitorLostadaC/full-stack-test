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
    <Container
      component="main"
      sx={{
        m: "2rem auto",
        height: "100vh"
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
        caption="Cervejas"
      />
    </Container>
  )
}
