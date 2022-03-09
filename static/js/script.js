// challenge in days 
function age_in_days(){
    let birth_year = prompt("When were you born?");
    let current_year = prompt("What year is it?");
    let age_in_days = (current_year - birth_year) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode("You are "+ age_in_days + " days old");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
} 

function reset(){
    document.getElementById("ageInDays").remove()
}
// challenge 2: Rock paper scissors
function gen_image(){
    let image = document.createElement('img');
    let div = document.getElementById("flex-cat-gen");
    image.src = "https://cdn2.thecatapi.com/images/1qv.jpg";
    image.width = '150'
    div.appendChild(image);
}

// challenge 3: Rock paper scissors
function choice_rock(){
    let other_choice = ['Rock', 'Scissors', 'paper'];
    var randomItem = other_choice[Math.floor(Math.random()*other_choice.length)]
    if( randomItem == 'paper' ){
        div = document.getElementById('wow');
        let you_lose = document.createTextNode('You Lose');
        div.appendChild(you_lose)
        document.getElementById("scissors").remove()
       
    }else if(randomItem == 'Scissors'){
        div = document.getElementById('wow');
        let you_win = document.createTextNode('You Win');
        div.appendChild(you_win)
        document.getElementById("paper").remove()
        
    }else if(randomItem == 'Rock'){
        document.getElementById("paper").remove();
        document.getElementById('scissors').remove();
        image = document.createElement('img');
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIxKXjWIjEBuE5RWi9J7Cga-rHEkRWTSuIw&usqp=CAU";
        image.setAttribute('id','new_rock')
        image.setAttribute('width',150);
        div = document.getElementById('wow');
        let try_again = document.createTextNode('Try Again');
        div.appendChild(image);
        div.appendChild(try_again);
        
        
        
        
    }   
}
function choice_paper(){
    let other_choice = ['Rock', 'Scissors', 'paper'];
    var randomItem = other_choice[Math.floor(Math.random()*other_choice.length)]
    if( randomItem == 'paper'){
        document.getElementById("rock").remove();
        document.getElementById('scissors').remove();
        image = document.createElement('img');
        image.src = "https://cdn.pixabay.com/photo/2017/08/11/14/02/paper-2631126_1280.jpg"
        image.setAttribute('id','new_paper')
        image.setAttribute('width',150);
        let paragrapgh = document.getElementById('wow');
        let try_again = document.createTextNode('Try Again');
        paragrapgh.appendChild(image);
        paragrapgh.appendChild(try_again);
        
    }else if(randomItem == 'Scissors'){
        document.getElementById("rock").remove()
        let paragrapgh = document.getElementById('wow');
        let you_lose = document.createTextNode('You Lose');
        paragrapgh.appendChild(you_lose);

    }else if(randomItem == 'Rock'){
        document.getElementById("scissors").remove()
        let paragrapgh = document.getElementById('wow');
        let you_win = document.createTextNode('You Win');
        paragrapgh.appendChild(you_win);
        
    }   
}

function choice_scissors(){
    let other_choice = ['Rock', 'Scissors', 'paper'];
    var randomItem = other_choice[Math.floor(Math.random()*other_choice.length)]
    if( randomItem == 'paper'){
        document.getElementById("rock").remove()
        let paragrapgh = document.getElementById('wow');
        let you_win = document.createTextNode('You Win');
        paragrapgh.appendChild(you_win);
        
    }else if(randomItem == 'Scissors'){
        document.getElementById("rock").remove();
        document.getElementById("paper").remove();
        image = document.createElement('img');
        image.src = "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ38TBstKfakVftAsZWyUW2O5fbPniEx3lDk1novZubeie57UUy5gNVPTOPF6AXZ2lkHj6ceF8RBcC2XoAxMSo";
        image.setAttribute('id','new_scissors');
        image.setAttribute('width',150);
        let div= document.getElementById('wow');
        let try_again = document.createTextNode('Try Again');
        div.appendChild(image);
        div.appendChild(try_again);
        
    }else if(randomItem == 'Rock'){
        document.getElementById("paper").remove()
        let paragrapgh = document.getElementById('wow');
        let you_lose = document.createTextNode('You Lose');
        paragrapgh.appendChild(you_lose);
        
    }   
}