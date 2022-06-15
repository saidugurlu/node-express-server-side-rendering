export const siteView = ({nouns}) => {
   return `
    <h2>There are ${nouns.length} nouns</h2>
    <ul>${nouns
      .map((m) => `<li>${m.article} ${m.singular}</li>`)
      .join("")}</ul>`
       /*  mapten bir array gelir ve array de otomatik olarak virgül konulur. 
       Bunu kaldirmak icin join() metodunu kullaniriz. */

}