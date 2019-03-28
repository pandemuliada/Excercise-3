
let bodyRow = document.getElementById('bodyRow');

const fetchData = () => {
  let i = 1; // Increment Number for Data List
  bodyRow.innerHTML = ''; // Set bodyRow to null when function invoke
  let content = ''; // Set content to null when function invoke
  
  // Foreach the datas array
  datas.forEach(data => {
    content += `
    <tr>
      <td>`+ i++  +`</td>
      <td>`+ data.name +`</td>
      <td>`+ data.orbital_period +`</td>
      <td>`+ data.climate +`</td>
      <td>`+ data.population +`</td>
      <td>`+ data.terrain +`</td>
    </tr>
    `;
  });
  bodyRow.innerHTML = content;
}


// SORTING / FILTERING
// ==============
// The default Sorting
datas.sort((a, b) => (a.name > b.name) ? 1 : -1); // Sort Ascending Alpabet
fetchData();

// Event When Button Filter is Clicked
const btnFilter = document.getElementById('btnFilter');
btnFilter.addEventListener('click', () => {
  let filter = document.getElementById('filter');
  if (filter.value == 'nameAsc') {
    datas.sort((a, b) => (a.name > b.name) ? 1 : -1); // Sort Ascending Alpabet
  } else if (filter.value == 'nameDesc') {
    datas.sort((a, b) => (a.name > b.name) ? -1 : 1); // Sort Descending Alpabet
  } else if (filter.value == 'orbAsc') {
    datas.sort((a, b) => a.orbital_period - b.orbital_period); // Sort Ascending Number 
  } else if (filter.value == 'orbDesc') {
    datas.sort((a, b) => b.orbital_period - a.orbital_period); // Sort Ascending Number 
  } else if (filter.value == 'popAsc') {
    datas.sort((a, b) => a.population - b.population); // Sort Ascending Number 
  } else if (filter.value == 'popDesc') {
    datas.sort((a, b) => b.population - a.population); // Sort Ascending Number 
  }
  fetchData();
})




// ADD NEW ITEM IN THE TABLE //

// Toggle Form
const btnOpen = document.getElementById('addBtn');
btnOpen.addEventListener('click', () => {
  if (btnOpen.textContent == 'Add Data') {
    form.style.display = 'block'; // Show Form
    btnOpen.textContent = 'Hide Form';
    btnOpen.classList.add('active');
  } else {
    form.style.display = 'none'; // Hide Form
    btnOpen.textContent = 'Add Data';
    btnOpen.classList.remove('active');
  }
})

// Form DOM
const form = document.getElementById('formAdd');

// Submit Button
const addButton = document.getElementById('btnSubmit');

// Input Field
let name = document.getElementById('ipName');
let orbit = document.getElementById('ipOrb');
let climate = document.getElementById('ipClimate');
let population = document.getElementById('ipPopulation');
let terrain = document.getElementById('ipTerrain');

// Event When Form is Submited
addButton.addEventListener('click', () => {
  let newObj = {
    'name': name.value,
    'orbital_period': orbit.value,
    'climate': climate.value,
    'population': population.value,
    'terrain': terrain.value,
  }

  datas.push(newObj);

  // Get Last Index of the datas array
  let newItem = datas.slice(-1).pop();
  let content = `
    <tr>
      <td>`+ datas.length +`</td>
      <td>`+ newItem.name +`</td>
      <td>`+ newItem.orbital_period +`</td>
      <td>`+ newItem.climate +`</td>
      <td>`+ newItem.population +`</td>
      <td>`+ newItem.terrain +`</td>
    </tr>
  `;
  bodyRow.innerHTML += content;
  // Set Form Input to null after Submit Button is clicked
  setFormToNull();
})

// SetFormToNull Function
const setFormToNull = () => {
  name.value = '';
  orbit.value = '';
  climate.value = '';
  population.value = '';
  terrain.value = '';
}







