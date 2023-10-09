var select_yearr ;



function display_all(years){
  
  years = JSON.parse(years);

  
  for(let i=0; i < years.length; i++){
    let father = document.getElementById("father");
    let child = document.createElement("DIV");
    let grandchild = document.createElement("P");
    let grandchild_1 = document.createElement("P");
    let grandchild_2 = document.createElement("P");
    let grandchild_3 = document.createElement("P");
    father.appendChild(child);
    child.appendChild(grandchild);
    child.appendChild(grandchild_1);
    child.appendChild(grandchild_2);
    child.appendChild(grandchild_3);
    child.classList.add('son');
    grandchild.classList.add('grandchild');
    grandchild_1.classList.add('grandchild_1');
    grandchild_3.classList.add('grandchild_3');
    grandchild_2.classList.add('grandchild_2');
    child.setAttribute('value',years[i].year);
    grandchild.innerHTML = years[i].title +" "+"_"+" "+ years[i].year
    
    if( years[i].info.rating){
      grandchild_1.innerHTML = "rating"+":" +" "+ years[i].info.rating
    }  

    grandchild_3.innerHTML = "rank"+":" +" "+ years[i].info.rank

    if(years[i].info.plot){
    grandchild_2.innerHTML = years[i].info.plot
    }
    if(years[i].info.rating > 8){
      grandchild_1.style.color = "gold"
    }
    if(years[i].info.rating <4){
      grandchild_1.style.color = "red"
    }
  }
}
async function set_data_all(file) {
    let x = await fetch(file);
    let y = await x.text();
    display_all(y);
    // console.log(y);
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













