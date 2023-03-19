export function insertQuery(table: string, rows: string) {
  return `INSERT INTO ${table}${rows} VALUE (?)`;
}
