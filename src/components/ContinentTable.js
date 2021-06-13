import { Continent } from "./Continent";
import { useQuery, gql } from "@apollo/client";


//The GraphQL Query to get the Continents
const CONTINENTS = gql`
  query Continents {
    continents {
      name
      code
      countries {
          __typename
      }
    }
  }`;

export function ContinentTable() {
    const { loading, error, data } = useQuery(CONTINENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Code
                </th>
                        <th>
                            Name
                </th>
                        <th>
                            Num of Countries
                </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Map the results onto entries into the Continent Table
                        data.continents.map((continent) => {
                            return <Continent key={continent.code} continent={continent} />

                        })
                    }
                </tbody>
            </table>
        </div>
    );
}