function solve(input) {
    let deserializedStudents = JSON.parse(input);


    let result = "<table>";
    result += "\r\n   <tr>";

    for (const property in deserializedStudents[0]) {
        result += `<th>${property}</th>`;
    }

    result += "</tr>";

    for (let student of deserializedStudents) {

        result += `\r\n  <tr>`;

        for (const property in deserializedStudents[0]) {
            result += `<td>${student[property]}</td>`;
        }

        result += `</tr>`;
    }

    result += "\r\n</table>"

    return result;
}



console.log(solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));