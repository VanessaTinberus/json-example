//Grab a reference to the header tag in the HTML file
const header = document.querySelector('header');

//Grab a reference to the section tag in the HTML file
const section = document.querySelector('section');

//create a request
let request = new XMLHttpRequest();

//open the request using the open() method
request.open('GET', requestURL);

//set the responseType to JSON   
request.responseType = 'json';

//end the request with the send() method
request.send();

//wait for the response to return from the server, then deal with it
request.onload = function() {
//Store the JSON object in superHeroes
const superHeroes = request.response;

//Pass superHeroes to a function to parse the header
populateHeader(superHeroes);

//Pass superHeroes to a function to parse the individual heroes
showHeroes(superHeroes);
  }



function populateHeader(jsonObj) {
  // Create a <h1> HTML element
  const myH1 = document.createElement('h1');
  
  // Set the text value to Super Hero Squad
  // by grabbing the JSON object value that corresponds to squadName
  myH1.textContent = jsonObj['squadName'];
  
  // Update the HTML file; this accomplishes parsing squadName to H1.
  header.appendChild(myH1);

  //similar parsing
  // Create a <p> element 
  const myPara = document.createElement('p');
  
  //Set the text value to Hometown: Metro City // Formed: 2016
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  
  // Update the HTML file
  header.appendChild(myPara);
}



//creates and displays the superhero cards
function showHeroes(jsonObj) {

  // Grab the array that contains the squads members
  // Once we have the array we can treat this like an ordinary array just like we did on
  // the page Object, Class, and Array Practice
  const heroes = jsonObj['members'];
      
  // Loop through the heores object array 
  // Add information for each hero on a a time
  for (let i = 0; i < heroes.length; i++) {
  
    // We need to create the HTML objects that they will appear in HTML file
    
    // Create article element in the HTML file
    // We use the article element to create a card that will hold all of the hero's information 
    const myArticle = document.createElement('article');
    
    // Create a <H2> heading for the hero's name
    const myH2 = document.createElement('h2');
    
    // Create paragraphs for the hero's secret identity, age, and superpowers
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    
    // Create a bulleted list to contain the hero's superpowers    
    const myList = document.createElement('ul');

    // Grab the hero's secret identity, age, and superpowers from the JSON Object and
    // update the HTML elements
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
    
    // Grab the array that contains the hero's superpowers    
    const superPowers = heroes[i].powers;
    
    // Loop through the array grabbing each individual power and adding it to a bulleted list
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    // Add the HTML objects in the order that they will appear in HTML article
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    
    // Add the article to the HTML file
    section.appendChild(myArticle);
  }
}