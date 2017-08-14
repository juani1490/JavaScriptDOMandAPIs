document.body.onload = generateDOM;

/*I create a function that builds a DOM structure*/
function generateDOM(M){
	M = [1,2,3,4,5,6,7,8,9,10];

    let newTable = document.createElement("table");
    newTable.setAttribute("id","mitabla");
    document.body.appendChild(newTable);


	for (let i = 0; i < M.length ; i++) {

      let newTr = document.createElement("tr");
      let newTr2 = document.createElement("tr");
      let newTd = document.createElement("td");
      let tdcontent = document.createTextNode(M[i]);
      let trcontent = document.createTextNode("________________");

      newTd.appendChild(tdcontent);
      newTr.appendChild(newTd);
      newTable.appendChild(newTr);

      newTr2.appendChild(trcontent);
      newTable.appendChild(newTr2);


    }

};