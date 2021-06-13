import { Link } from 'react-router-dom';

//This draws the Continent Entry
//The entry has a router link, it uses the continent code as the Route
export function Continent({ continent }) {
    //
    return (
        <tr>
            <td>
                {continent.code}
            </td>
            <td>
                <Link to={"/" + continent.code}>
                    {continent.name}
                </Link>
            </td>
            <td>
                {
                    //The server does not offer a count of the entries, so this returns the length
                    continent.countries.length
                }
            </td>
        </tr >
    );
}