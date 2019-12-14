// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



const headerContainer= document.querySelector('.header-container');

headerContainer.appendChild(Header());

function Header() {

    // creating DOM elements

    const headerDiv= document.createElement('div');
    const span= document.createElement('span');
    const h1= document.createElement('h1');
    const span2= document.createElement('span');

    // adding classes

    headerDiv.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    // adding textContent

    span.textContent= 'SMARCH 28, 2019';
    h1.textContent= 'Lambda Times';
    span2.textContent= '98°';

    // appending elements

    headerDiv.appendChild(span);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(span2);


    return headerDiv;

}
