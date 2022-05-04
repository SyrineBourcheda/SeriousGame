const questions = [

    {   
        question: "How much plastic ends up in our seas every year?  " ,
        optionA: "8 pounds",
        optionB: "8 hundred pounds",
        optionC: "8 thousand pounds",
        optionD: "8 million tons",
        correctOption: "optionD",
        imagee:'assets/img/seaimg/octopus.png',
        identt:'Image1',
        doc: "Plastic takes a really long time to break down and dissolve, almost forever! But 8 million tons of it ends up in our oceans every year, where fish and turtles can mistake it for food and swallow it, or accidentally get stuck in it. But you can prevent that by using less plastic, and recycling the plastic that you do use!  "
        
    },

    {
        question: "Where does most ocean pollution come from?",
        optionA: "marine activities",
        optionB: "land activities",
        optionC: "atmospheric activities",
        optionD: "both,marine and land activities,it is fairly evenly devided",
        correctOption: "optionD",
        imagee:'assets/img/seaimg/fish.png',
        identt:'Image2',
        doc: 'more than 80% of all ocean pollution comes from land.Oil from cities and factories washes down and  drains into the ocean,runoff from agricultural fields and lawns carries fertilizer to the sea ,and tons of solid garbage(most of it plastic)winds up bobbing in the ocean. '
    },

    {
        question: "Evaluated water temperature can cause corals to do what?",
        optionA: "grow too quickly",
        optionB: "bleach",
        optionC: "eat themselves",
        optionD: "it has no effect",
        correctOption: "optionB",
        imagee:'assets/img/seaimg/coral.png',
        identt:'Image3',
        doc: 'Evaluated temperatures trigger mass episodes of bleaching.Bleaching is a process which involves corals ejecting algae,which live in a symbiotic relationship with the corals and lend them their vibrant hue .Bleaching slows coral growth and makes it susceptible to disease.It can even lead to large -scale reef die-offs.'
    },

    {
        question: "What animals are most at risk from ocean acidification?",
        optionA:"shellfish",
        optionB: "marine mammals",
        optionC: "bottom-feeding fish",
        optionD: "sea stars",
        correctOption: "optionA",
        imagee:'assets/img/seaimg/dauphin.png',
        identt:'Image4',
        doc: 'Ocean acidification”refers to the process of carbonic acid being formed as carbon dioxide dissolves in the ocean.Ocean acidity has already increased more than 30% from pre-industrial levels .This increased acidity inhibits shell growth in animals such as oysters,clams,and scallops.  '
    },

    {
        question: "Industrial fishing is thought to have wiped out what percentage of large ,predatory fish.",
        optionA: "25%",
        optionB: "55%",
        optionC: "66%",
        optionD: "90%",
        correctOption: "optionC",
        imagee:'assets/img/seaimg/seaweed.png',
        identt:'Image5',
        doc: 'In the 20th century,humans reduced the biomass of predatory fishes by more than two-thirds and most of this alarming decline has occurred since the 1970s.Consumers prefer predatory fish like grouper,tuna,swordfish and sharks to species lower on the food chain'
    },
    {
        question: "What area of the ocean is suffering most from habitat destruction?",
        optionA: "seafloor",
        optionB: "Deap sea",
        optionC: "coasts",
        optionD: "deep sea and seafloor ",
        correctOption: "optionC",
        imagee:'assets/img/seaimg/shellfish.png',
        identt:'Image6',
        doc: 'Most areas of the world’s oceans are experiencing habitat loss.But coastal areas,with their closeness to human population centers,have suffered disproportionately and mainly from human activity such as agricultural and industrial development'
    }


]

let documentation =["premiere doc","deuxieme doc","troisieme doc", "quatrieme doc"]
let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 5) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 100  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question
let imagee = ['assets/img/seaimg/coral.png', 'assets/img/seaimg/dauphin.png' , 'assets/img/seaimg/fish.png' , 'assets/img/seaimg/octopus.png' ,'assets/img/seaimg/seaweed.png','assets/img/seaimg/shellfish.png'];
let identt = ['Image1' , 'Image2','Image3','Image4','Image5','Image6'];
var i = 0;
// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null
    
    
   
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
       
    })
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
   

    //checking if checked radio button is same as answer
   
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            
            
             
            document.getElementById('doc-modal').style.display = "flex"  
               
             
                
            indexNumber++;//adding 1 to index so has to display next question..
            
            //set to delay question number till when next question loads
            setTimeout(() => {
               
                questionNumber++
            }, 1000)
            
            document.getElementById(currentQuestion.identt).src= currentQuestion.imagee ;
            document.getElementById("1").innerHTML=currentQuestion.doc;
           
             
           
          
           
           
        }

         else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
           // document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            //indexNumber++
            
            //set to delay question number till when next question loads
            document.getElementById('reanswer-modal').style.display = "flex"
            setTimeout(() => {
                //questionNumber++
            }, 1000) 
           
        }
    })
}




//called when the next button is called
function handleNextQuestion() {
    //checkForAnswer() //check if player picked right or wrong option
  
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 5) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
            
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);

}
//called when the submit button is called
function handleSubmitQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
   
   
    

}
//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}
// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null
    

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore= 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
//function to close doc modal
function closeDocModal() {
    document.getElementById('doc-modal').style.display = "none"
}
//function to close reanswer modal
function closeReanswerModal() {
    document.getElementById('reanswer-modal').style.display = "none"
}