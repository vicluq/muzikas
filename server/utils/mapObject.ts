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

export function mapObjectToUpdate(obj: Object) {
      const objEntries = Object.entries(obj);
      let mappedObjectString = ""

      objEntries.forEach(([k, v], i) => {
            mappedObjectString += `${k} = ${v}${i !== objEntries.length - 1 ? ',' : ''}`;
      })

      return mappedObjectString;
}