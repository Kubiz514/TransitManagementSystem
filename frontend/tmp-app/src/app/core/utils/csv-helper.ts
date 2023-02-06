export const getJsonFromCsv = (event: any, outProperty: any) => {
    const file: Blob = event.target.files[0];
    const reader = new FileReader();
    const jsonData: any[] =[];
    reader.onload = () => {
      let csvContent: any = reader.result?.toString();
      const rows = csvContent.split('\n');
      const headers = rows[0].split(',')
      .map((x: string) => x.replace(/\s|\\|\"/g,''));

      const dataRows = rows.slice(1).forEach((x: any) => {
        const data = x.replace(/\s|\\|\"/g,'').split(',');
        const resultObject: any = {};

        headers.forEach((headerName: string) => {
          const headerIdx = headers.indexOf(headerName);
          resultObject[headerName] = data[headerIdx];
        });

        jsonData.push(resultObject);
      });

      outProperty = jsonData;   
    };
   reader.readAsText(file);

  
}