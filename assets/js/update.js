
let runScripts = () => {
  
  let chart_bars = document.getElementById("chart-bars");
  console.log(chart_bars);
  
  let icons = document.getElementsByTagName("i");
  console.log(icons);

  let cards = document.getElementsByClassName("card");
  console.log(cards);
  
}

let modifyText = () => {
  let listOfP = document.getElementsByTagName("p");
  let elementP = listOfP[3];
  elementP.innerHTML = "Dinero actual";

  let listOfH4 = document.getElementsByTagName("h4");
  let elementH4 = listOfH4[0];
  elementH4.innerHTML = "$301k";

}

let updateData = () => {

  
  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];  

  
  let [ users, clients, sales ] = data;

  
  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;

   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

  
  let listOfElements = document.getElementsByClassName('text-end pt-1') 

  
  let [ , second, third, fourth ] = listOfElements;

  
  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;

  
  let cambios = [
    {
      valor_previo: 250,
      valor_actual: 301,
      mensaje_tiempo: 'que la semana anterior'
    },
    {
      valor_previo: 3510,
      valor_actual: 3200,
      mensaje_tiempo: 'que la semana anterior'
    },
    {
      valor_previo: 3920,
      valor_actual: 4215,
      mensaje_tiempo: 'que ayer'
    },
    {
      valor_previo: 110200,
      valor_actual: 121520,
      mensaje_tiempo: 'que ayer'
    }
  ]

  let [cmoney, cusers, cclients, csales] = cambios;

  let {valor_previo: valorprevioM, valor_actual: valoractualM, mensaje_tiempo: mensaje_tiempoM} = cmoney;
  let {valor_previo: valorprevioU, valor_actual: valoractualU, mensaje_tiempo: mensaje_tiempoU} = cusers;
  let {valor_previo: valorprevioC, valor_actual: valoractualC, mensaje_tiempo: mensaje_tiempoC} = cclients;
  let {valor_previo: valorprevioS, valor_actual: valoractualS, mensaje_tiempo: mensaje_tiempoS} = csales;

  
  let porcentaje_de_cambioM = (valoractualM - valorprevioM)*100/valorprevioM;
  let porcentaje_de_cambioU = (valoractualU - valorprevioU)*100/valorprevioU;
  let porcentaje_de_cambioC = (valoractualC - valorprevioC)*100/valorprevioC;
  let porcentaje_de_cambioS = (valoractualS - valorprevioS)*100/valorprevioS;

  let clase_cambio = (porcentaje) => {
    if (porcentaje>0) {
      return "text-success"  
    }
    else{
      return "text-danger"
    }
  }  

  let clase_cambioM = clase_cambio(porcentaje_de_cambioM,mensaje_tiempoM);
  let clase_cambioU = clase_cambio(porcentaje_de_cambioU,mensaje_tiempoU);
  let clase_cambioC = clase_cambio(porcentaje_de_cambioC,mensaje_tiempoC);
  let clase_cambioS = clase_cambio(porcentaje_de_cambioS,mensaje_tiempoS);


  let message_cmoney = `<p class="mb-0"><span class="text-sm ${clase_cambioM} font-weight-bolder"> ${porcentaje_de_cambioM} </span> ${mensaje_tiempoM} </p>`;
  let message_cusers = `<p class="mb-0"><span class="text-sm ${clase_cambioU} font-weight-bolder"> ${porcentaje_de_cambioU} </span> ${mensaje_tiempoU} </p>`;
  let message_cclients = `<p class="mb-0"><span class="text-sm ${clase_cambioC} font-weight-bolder"> ${porcentaje_de_cambioC} </span> ${mensaje_tiempoC} </p>`;
  let message_csales = `<p class="mb-0"><span class="text-sm ${clase_cambioS} font-weight-bolder"> ${porcentaje_de_cambioS} </span> ${mensaje_tiempoS} </p>`;

  let listOfElements2 = document.getElementsByClassName('card-footer p-3') 

  
  let [ first2, second2, third2, fourth2 ] = listOfElements2;

  first2.innerHTML = message_cmoney;
  second2.innerHTML = message_cusers;
  third2.innerHTML = message_cclients;
  fourth2.innerHTML = message_csales;

}

updateData()
runScripts()
modifyText()
