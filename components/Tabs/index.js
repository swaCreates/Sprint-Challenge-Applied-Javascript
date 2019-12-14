// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function tabComponent(content){
    // creating element
    const tabDiv= document.createElement('div');

    // adding class
    tabDiv.classList.add('tab');

    // adding textContent
    tabDiv.textContent= content;

    return tabDiv;

    
}

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(function(res){
    console.log(res.data.topics)
    res.data.topics.forEach(function(item){

      topics.appendChild(tabComponent(item));
    });

})

const topics= document.querySelector('.topics');
