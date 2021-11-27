async function showShopList() {
const apiUrl="http://192.168.1.106:8085/api/v1/products";
const response= await fetch(apiUrl);
const data= await response.json();
console.log(data);
const dlugoscTablicy= data.length;
console.log(dlugoscTablicy);
for (let i=1; i<data.length; i++) {
  let tBody = document.getElementById('tbody');
  let tr = document.createElement("tr");
  tBody.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);
  th.setAttribute("scope", "row");
  th.innerText = data[i].id;
  let td1 = document.createElement("td");
  tr.appendChild(td1);
  td1.innerText= data[i].name;
  let td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.innerText=data[i].shopName;
  let td3 = document.createElement("td");
  tr.appendChild(td3);
  td3.innerText=data[i].category;
}
}

function addToShopList() {
let pobranyProdukt = document.getElementById('exampleInputEmail1').value;
let pobranySklep = document.getElementById('exampleInputPassword1').value;
let pobranaKategoria = document.getElementById('inputCategory').value;

let daneDoWyslania = {
  name:pobranyProdukt,
  shopName:pobranySklep,
  category: pobranaKategoria
}
fetch("http://192.168.1.106:8085/api/v1/products", {
  method: "POST",
  body: JSON.stringify(daneDoWyslania),
  headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json());
}
