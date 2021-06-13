export function Country({country}) {
    return (
        <tr>
            <td>
                {country.code}
            </td>
            <td>
                {country.name}
            </td>
            <td>
                {country.native}
            </td>
            <td>
                {country.capital}
            </td>
            <td>
                {country.currency}
            </td>
            <td>
                {country.languages.map((language) => {
                    return (<p key={language.name} >{language.name}</p>)
                })}
            </td>
        </tr>
    );
}