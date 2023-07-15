import { Container } from "@mui/material"
import { useQuery } from "react-query"
import { GET_BEERS, getBeers } from "../../services/BeerService/BeerServices"

export const HomePage = () => {
  const getBeersQuery = useQuery({
    queryKey: [GET_BEERS],
    queryFn: () =>
      getBeers({
        page: 1,
        perPage: 1
      })
  })

  console.log(getBeersQuery.data)

  return <Container component="main"></Container>
}
