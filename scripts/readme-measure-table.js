import measures from '../package/measures.js';
//const measures = require('../src/lib/measures');

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const indications = [ 'green', 'yellow', 'orange', 'red' ];
const columns = [ 'ID', 'Name', 'Range' ];

let table = '';
//table.push('| ID | Name | Name (NL) | Range |');
//table.push('|----|------|-----------|-------|');
table += '<table>';

// Head
table += '<thead>';
for (const col of columns) {
  table += `<th>${col}</th>`;
}
table += '</thead>';

// Body
table += '<tbody>';
for (const [ id, m ] of Object.entries(measures)) {
  m.range.sort((a, b) => a.value - b.value);

  let row = '';
  row += `<tr>`;
  row += `<td><code>${id}</code></td>`;
  row += `<td>${capitalise(m.name.en)}</td>`;

  row += `<td>`;
  row += `${m.range[0].value} — ${m.range[m.range.length - 1].value}`;
  row += `<ul>`;
  for (const p of m.range) {
    row += `<li>&gt;${p.value}: ${indications[p.indication]}</li>`;
  }
  row += '</ul></td>'

  row += '</tr>';
  table += row;
}
table += '</tbody>';

// End
table += '</table>';
console.log(table);
