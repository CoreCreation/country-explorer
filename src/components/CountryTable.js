import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Country } from './Country';

//This is the GraphQL query to get the detailed data about each country
//The previous query only grabbed the "__typename" to save data, this one grabs much more information
const COUNTRIES = gql`
    query Countries($code: ID!) {
        continent(code: $code) {
            name
            countries {
                code
                name
                native
                capital
                currency
                languages {
                    name
                }
            }
        }
    }`;

export function CountryTable() {
    //Get the code from the Route
    const { code } = useParams();
    const { loading, error, data } = useQuery(COUNTRIES,
        {
            variables: { code },
        });

    if (loading) return <p>Loading...</p>;
    //It is possible that a wrong route has been provided, so if the data is null then it reports an error
    if (error || data.continent === null) return <p>Error :(</p>;

    return (
        <div>
            <h1>{ data.continent.name }</h1>
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
                            Native 
                        </th>
                        <th>
                            Capital 
                        </th>
                        <th>
                            Currency 
                        </th>
                        <th>
                            Languages 
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    // Map results onto entries in the Country Table
                    data.continent.countries.map((country) => {
                        return (<Country key={country.code} country={country} />);
                    })
                }
                </tbody>
            </table>
        </div>
    );
}