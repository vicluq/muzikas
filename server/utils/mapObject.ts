export function mapObjectToString(obj: Object) {
      const objEntries = Object.entries(obj);
      let mappedKeys = "";
      let mappedValues = "";

      objEntries.forEach(([k, v], i) => {
            let value = v;

            if(typeof v === 'string') value = `"${v}"`;

            mappedKeys += `${k}${i !== objEntries.length - 1 ? ',' : ''}`;
            mappedValues += `${value}${i !== objEntries.length - 1 ? ',' : ''}`;
      })

      return { mappedKeys, mappedValues };
}

export function mapObjectToUpdate(obj: Object) {
      const objEntries = Object.entries(obj);
      let mappedObjectString = ""

      objEntries.forEach(([k, v], i) => {
            let value = v;
            if(typeof v === 'string') value = `"${v}"`;

            mappedObjectString += `${k} = ${value}${i !== objEntries.length - 1 ? ',' : ''}`;
      })

      return mappedObjectString;
}