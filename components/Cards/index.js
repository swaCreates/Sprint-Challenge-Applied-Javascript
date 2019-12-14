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
    cardsContainer.appendChild(articleComponent(res.data.articles.javascript));
    cardsContainer.appendChild(articleComponent(res.data.articles.bootstrap))
    cardsContainer.appendChild(articleComponent(res.data.articles.technology))
    cardsContainer.appendChild(articleComponent(res.data.articles.jquery))
    cardsContainer.appendChild(articleComponent(res.data.articles.node))
})

function articleComponent(obj){

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

    headLineDiv.textContent= obj.headline;
    img.src= obj.authorPhoto;
    span.textContent= obj.authorName;

    // appending content

    cardDiv.appendChild(headLineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(span);


    return cardDiv;

}