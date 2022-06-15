export const siteView = ({ nouns, jobs }) => {
  return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Node-Express</title>
   </head>
   <body>
   <h2>There are ${nouns.length} nouns</h2>
   <ul>${nouns.map((m) => `<li>${m.article} ${m.singular}</li>`).join("")}</ul>
      /* mapten bir array gelir ve array de otomatik olarak virgül konulur. 
     Bunu kaldirmak icin join() metodunu kullaniriz.  */ 


     <h2>There are ${jobs.length} nouns</h2>
   </body>
   </html>
   
   `;
};
