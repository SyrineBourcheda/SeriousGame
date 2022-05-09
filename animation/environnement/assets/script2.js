const questions = [

  

    {
        question: "What is the Greenhouse effect?",
        optionA: "when you paint your house green to become an environmentalist",
        optionB: "when the gases in our atmosphare trap heat and block it from escaping our planet ",
        optionC: "2The name of climate change legislation that was passed by Congress",
        optionD: "when you build a greenhouse",
        correctOption: "optionB",
        imagee:'assets/img/airimg/trees2.png',
        identt:'Image3',
        doc: 'Certain gases – called greenhouse gases –  work like a blanket and trap the Sun’s heat in our planet.3 Like in a greenhouse – where the Sun’s warmth helps plants to grow healthy – greenhouse gases keep the planet warm. Without these gases, we would not be alive.'
    },

    {
        question: "What percent of our trash can be recycled?",
        optionA: "50%",
        optionB: "45%",
        optionC: "90%",
        optionD: "75%",
        correctOption: "optionD",
        imagee:'assets/img/airimg/air1.png',
        identt:'Image2',
        doc: 'Remember how much trash we throw away? Well, 75% of that trash could be recycled instead! That could mean a lot of trash saved from going to the landfill and dumps.'
    },

    {
        question: "What are the most environmentally friendly ways to get to school?",
        optionA: "Bus",
        optionB: "Car",
        optionC: "Bike",
        optionD: "Subway",
        correctOption: "optionC",
        imagee:'assets/img/airimg/bike.png',
        identt:'Image4',
        doc: 'assets/img/airimg/bike.jpg'
    },

    {
        question: "Every ton of new glass produced generates ...... lbs. of air pollution?",
        optionA: "27.8 lbs ",
        optionB: "33.8 lbs",
        optionC: "20.5 lbs",
        optionD: "40.5 lbs",
        correctOption: "optionA",
        imagee:'assets/img/airimg/air1.png',
        identt:'Image5',
        doc: 'documentation5'
    },
    {
        question: "When you go to the supermarket, it's best to...",
        optionA: "Take your own reusable bag from home. ",
        optionB: "Buy a reusable bag.",
        optionC: "Buy a paper bag.",
        optionD: "Buy a plastic bag.",
        correctOption: "optionA",
        imagee:'assets/img/airimg/poubelle3.png',
        identt:'Image6',
        doc: 'Reusable bags require more energy to produce than common plastic shopping bags. One reusable bag requires the same amount of energy as an estimated 28 traditional plastic shopping bags or eight paper bags.'
    },
    {
        question: "Which of the following is not the consequence of ozone layer depletion?",
        optionA: "Tides",
        optionB: "Cyanobacteria are sensitive to UV radiation and would be affected by its increase.",
        optionC: "Malignant melanoma-Another form of skin cancer",
        optionD: "  Increased ultraviolet rays",
        correctOption: "optionA",
        imagee:'assets/img/airimg/ccloud.png',
        identt:'Image7',
        doc: 'Ozone depletion can cause increased UV rays, skin cancers and can also affect cyanobacteria'
    },
    

    {
        question: "Which one was a type of air pollution?",
        optionA: "oxygen",
        optionB: "nitrogen dioxide",
        optionC: "hydrogen",
        optionD: "particles",
        correctOption: "optionB",
        imagee:'assets/img/landimg/cloud1.png',
        identt:'Image10',
        doc: 'Nitrogen dioxide is part of a group of gaseous air pollutants produced as a result of road traffic and other fossil fuel combustion processes. Its presence in air contributes to the formation and modification of other air pollutants, such as ozone and particulate matter, and to acid rain.'
    }

    


]

let documentation =["premiere doc","deuxieme doc","troisieme doc", "quatrieme doc"]
let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 6) {
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
let image = ['assets/img/landimg/tree', 'assets/img/bleu.png' , 'assets/img/her.png' , 'assets/img/poissonn.png' ,'assets/img/tutle.png'];
let ident = ['Image4', 'Image1' , 'Image2','Image3','Image4','Image5'];
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
        if (indexNumber <= 6) {
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