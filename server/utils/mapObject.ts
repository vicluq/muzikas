export function mapObjectToString(obj: Object) {
      const objEntries = Object.entries(obj);
      let mappedKeys = "";
      let mappedValues = "";

      objEntries.forEach(([k, v], i) => {
            mappedKeys += `${k}${i !== objEntries.length - 1 ? ',' : ''}`;
            mappedValues += `${v}${i !== objEntries.length - 1 ? ',' : ''}`;
      })

      return { mappedKeys, mappedValues };
}