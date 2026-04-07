let count=0;

function displayCount(){
    const followers=document.getElementById("countDisplay");
    followers.innerHTML=count;
}
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue(){
    if(count===10){
        alert("Your Instagram post gained 10 followers! Congratulations! ")
    }
    else if(count===20){
        alert("Your Instagram post gained 20 followers! Keep it up! ")
    }
}