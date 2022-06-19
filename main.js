const modal = document.querySelector('#modal');
const heart = document.querySelectorAll('.like-glyph')

modal.classList.add('hidden');

for(var i = 0; i < heart.length;i++){
  heart[i].addEventListener('click',(e)=>{
    let heartParent= e.target;
    heartEvent(heartParent);
    console.log(heartParent);
})
}
function heartEvent(heartParent){
  mimicServerCall().then(function(response){
    heartClicked(heartParent);
    console.log("Success!");
    console.log(response);
  }).catch(function(error){
  modal.classList.remove('hidden');
    console.log(error);
  }
  )
}

function heartClicked(heartParent) {
  if(heartParent.innerHTML === EMPTY_HEART) {
    //add class
    heartParent.classList.add('activated-heart');
    heartParent.innerHTML = FULL_HEART;
    console.log("Success!");
  }
  else {
    heartParent.classList.remove('activated-heart');
    heartParent.innerHTML = EMPTY_HEART;
  }
}