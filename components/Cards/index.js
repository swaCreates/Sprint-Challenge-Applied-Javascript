// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer= document.querySelector('.cards-container');

// cardsContainer.appendChild(articleComponent(res.data.articles.bootstrap))

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(function(res){
    console.log(res.data.articles)

    const javascript= res.data.articles.javascript;
    const bootstrap= res.data.articles.bootstrap;
    const technology= res.data.articles.technology;
    const jquery= res.data.articles.jquery;
    const node= res.data.articles.node;

   for(let i= 0; i < javascript.length; i++){
    cardsContainer.appendChild(articleComponent(javascript[i]))
   }

   for(let i= 0; i < bootstrap.length; i++){
    cardsContainer.appendChild(articleComponent(bootstrap[i]))
   }

   for(let i= 0; i < technology.length; i++){
    cardsContainer.appendChild(articleComponent(technology[i]))
   }
   
   for(let i= 0; i < jquery.length; i++){
    cardsContainer.appendChild(articleComponent(jquery[i]))
   }

   for(let i= 0; i < node.length; i++){
    cardsContainer.appendChild(articleComponent(node[i]))
   }
    
})

function articleComponent(arr){

    // creating elements

    const cardDiv= document.createElement('div');
    const headLineDiv= document.createElement('div');
    const authorDiv= document.createElement('div');
    const imgContainer= document.createElement('div');
    const img= document.createElement('img');
    const span= document.createElement('span');

    // adding classes

    cardDiv.classList.add('card');
    headLineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    // adding textContent

    headLineDiv.textContent= arr.headline;
    img.src= arr.authorPhoto;
    span.textContent= arr.authorName;

    // appending content

    cardDiv.appendChild(headLineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(span);


    return cardDiv;

}