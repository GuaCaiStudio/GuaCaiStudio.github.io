
let button = document.getElementById("submit");
button.addEventListener("click",callback);

var input = 'goat';
var limit = {
  limit:5
}
function callback(){
  nounProject.getIconsByTerm(input, limit, getData);
  function getData(err, data) {
      if (!err) {
          console.log(data.icons);
      }
  }
}


//
// function getUserData(){
//   grabData()//get data
//   .then(function(result){//what happens when get
//     showText(result.first_name);
//   })
//   .catch(error => console.log(error));//what happens when error
// }
//




async function grabData(){
  let url = "http://api.thenounproject.com";

  let response = await fetch(url);
  let responseJson = await response.json();
  let dataOutput = responseJson.data[0].first_name;
  return{
    first_name:dataOutput
  }
}

function showText(input){
  let paragraph = document.createTextNode(input);
  let output = document.getElementById("output");
  output.appendChild(paragraph);
}
