

var select_year;




function set_year() {
  var year_tag = document.getElementById("select")
  arr_years = []
  for (var i = 0; i < select_year.length; i++) {
      arr_years[i] = select_year[i].year;
  }

  var uniqueSet = new Set(arr_years);
  var backToArray = [...uniqueSet];
  backToArray.sort();

  for (var j = 0; j < backToArray.length; j++) {
      var option = document.createElement("OPTION");
      option.innerHTML = backToArray[j];
      option.value = backToArray[j];
      year_tag.appendChild(option);

  }

}
function display_years(selected_year) {

    father.innerHTML = " "

    for (var i = 0; i < select_year.length; i++) {
        if (select_year[i].year == selected_year.value) {
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
        child.setAttribute('value',select_year[i].year);
        grandchild.innerHTML = select_year[i].title +" "+"_"+" "+ select_year[i].year
        
        if( select_year[i].info.rating){
          grandchild_1.innerHTML = "rating"+":" +" "+ select_year[i].info.rating
        }  
    
        grandchild_3.innerHTML = "rank"+":" +" "+ select_year[i].info.rank
    
        if(select_year[i].info.plot){
        grandchild_2.innerHTML = select_year[i].info.plot
        }
        if(select_year[i].info.rating > 7.9){
          grandchild_1.style.color = "gold"
        }
        if(select_year[i].info.rating <4){
          grandchild_1.style.color = "red"
        }
      }

    }
}





function box_movies(){
  for(let i=0; i < select_year.length; i++){
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
        child.setAttribute('value',select_year[i].year);
        grandchild.innerHTML = select_year[i].title +" "+"_"+" "+ select_year[i].year
        
        if( select_year[i].info.rating){
          grandchild_1.innerHTML = "rating"+":" +" "+ select_year[i].info.rating
        }  
    
        grandchild_3.innerHTML = "rank"+":" +" "+ select_year[i].info.rank
    
        if(select_year[i].info.plot){
        grandchild_2.innerHTML = select_year[i].info.plot
        }
        if(select_year[i].info.rating > 7.9){
          grandchild_1.style.color = "gold"
        }
        if(select_year[i].info.rating <4){
          grandchild_1.style.color = "red"
        }
      }
}


async function read_data(file) {
  let x = await fetch(file);
  let y = await x.text();
  select_year = JSON.parse(y);
  console.log(select_year);
  set_year()
  box_movies()
 
}


read_data("https://raw.githubusercontent.com/alirezaghd/Mini_movie/main/moviedata.json");













