var select_yearr ;



function display_all(years){
  
  years = JSON.parse(years);

  
  for(let i=0; i < years.length; i++){
    let father = document.getElementById("father");
    let child = document.createElement("DIV");
    let grandchild = document.createElement("P");
    let grandchild_1 = document.createElement("P");
    let grandchild_2 = document.createElement("P");
    father.appendChild(child);
    child.appendChild(grandchild);
    child.appendChild(grandchild_1);
    child.appendChild(grandchild_2);
    child.classList.add('son');
    grandchild.classList.add('grandchild');
    grandchild_1.classList.add('grandchild_1');
    grandchild_2.classList.add('grandchild_2');
    child.setAttribute('value',years[i].year);
    grandchild.innerHTML = years[i].title +" "+"_"+" "+ years[i].year
    grandchild_1.innerHTML = "plot"+":" +" "+ years[i].info.rank
    grandchild_2.innerHTML = years[i].info.plot

  }
}
async function set_data_all(file) {
    let x = await fetch(file);
    let y = await x.text();
    display_all(y);
    
  }
  
  function display_years(selected_year){
    
    let select = document.getElementById("select")
    select.innerHTML = "";
    for(i=0; i < select_yearr.length; i++){
      if(select_yearr[i] = 2013){

      let option = document.createElement("OPTION");
      option.innerHTML = select_yearr[i].year
      console.log(years);
      child.setAttribute('value',select_yearr[i].year);
      option.appendChild(child);
      select.appendChild(option);  
      }
    }
  }

  async function set_data_year(file) {
    let x = await fetch(file);
    let d = await x.text();
   select_yearr =  JSON.parse(d);
   
  }
 

  set_data_year("https://raw.githubusercontent.com/mehrangholizade/Assignment-18/main/moviedata.json");
  set_data_all("https://raw.githubusercontent.com/mehrangholizade/Assignment-18/main/moviedata.json");

















