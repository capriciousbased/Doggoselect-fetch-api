const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/api/breeds/list')
.then(response => response.json())
.then(data => generateOption(data.message))

fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => generateImage(data.message))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
  function generateImage(data){
    const html = `
    <img src='${data}' alt>
    <p> Click to view image of ${select.value}s</p>
    `;
    card.innerHTML = html; 
  }

  function generateOption(data){
    const options = data.map(item => `
      <option value = '${item}'> ${item} </option>
    `).join('');
    select.innerHTML = options;  
  }

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

