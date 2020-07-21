const bookList = document.getElementById('list')

const gardeningURL = "https://www.googleapis.com/books/v1/volumes?q=gardening"

fetch(gardeningURL)
  .then(function(res){
    return res.json()
  })
  .then(function(gBooksObj){
    console.log(gBooksObj);
    gBooksObj.items.forEach(function(item){
      bookList.innerHTML += `<li>${item.volumeInfo.title}</li>`
    })
  })

function handleGBooksObj(gBooksObj){
  //never try to take the information that we receive from a fetch request outside of it
  //let's use it right here where we know we have it for sure
  //debugger
  let titles = gBooksObj.items.map(function(item){
    return item.volumeInfo.title
  })
  titles.forEach(putTitleOnDom)
}

function putTitleOnDom(title){
  bookList.innerHTML += `<li>${title}</li>`
}


//1. One event listener to rule them all (if a bunch of elements use the same event type)
//2. Step by step process (1. Select the elements that will change on the dom 2. Add the event listeners to the elements that need them 3. Define your callbacks)
//3. Use your information from the fetch inside of the .then chain of functions
