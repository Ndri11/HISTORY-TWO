//inisiasi soal dalam quiz
const questions = [
    {
        question: "Apa makna penting dari pergerakan nasional bagi generasi saat ini ?",
        optionA: "Memperkuat identitas bangsa",
        optionB: "Menumbuhkan rasa nasionalisme",
        optionC: "Meningkatkan pendidikan",
        optionD: "Semua jawaban benar",
        correctOption: "optionD"
    },

    {
        question: "Siapa yang dikenal sebagai Bapak Proklamasi ?",
        optionA: "Mohammad Hatta",
        optionB: "Soekarno",
        optionC: "Jenderal Sudirman",
        optionD: "Ki Hajar Dewantara",
        correctOption: "optionB"
    },

    {
        question: "Sarekat Islam (SI) awalnya didirikan dengan nama ?",
        optionA: "Budi Utomo",
        optionB: "Indische Partij",
        optionC: "Abraham Lincoln",
        optionD: "Sarekat dagang islam",
        correctOption: "optionD"
    },

    {
        question: "Pendiri Sarekat Islam adalah?",
        optionA: "Soekarno",
        optionB: "December",
        optionC: "Haji Samanhudi",
        optionD: "Tirto Adhi Soerjo",
        correctOption: "optionC"
    },

    {
        question: "Kota tempat Sarekat Islam pertama kali berdiri adalah?",
        optionA: "Surabaya ",
        optionB: "Bandung",
        optionC: "Yogyakarta",
        optionD: "Solo",
        correctOption: "optionD"
    },

    {
        question: "Tujuan awal didirikannya Sarekat Islam adalah ?",
        optionA: "Membantu pedagang pribumi melawan dominasi pedagang Tionghoa",
        optionB: "Melawan penjajahan Belanda",
        optionC: "Melawan penjajahan Belanda",
        optionD: "Mengadakan perlawanan bersenjata",
        correctOption: "optionA"
    },

    {
        question: "SI pertama kali didirikan pada tahun?",
        optionA: "1905",
        optionB: "1912",
        optionC: "1911",
        optionD: "1913",
        correctOption: "optionC"
    },

    {
        question: "SI menjadi organisasi politik pada masa kepemimpinan?",
        optionA: "H.O.S. Tjokroaminoto",
        optionB: "Haji Samanhudi",
        optionC: "Agus Salim",
        optionD: "Semaun",
        correctOption: "optionA"
    },

    {
        question: "Sarekat Islam resmi berdiri sebagai organisasi pada tahun?",
        optionA: "1905",
        optionB: "1910",
        optionC: "1911",
        optionD: "1912",
        correctOption: "optionD"
    },

    {
        question: `"Tokoh Sarekat Islam yang dijuluki "Raja Jawa tanpa Mahkota" adalah`,
        optionA: "Mulyono",
        optionB: "Jokowi",
        optionC: "Agus Salim",
        optionD: "H.O.S. Tjokroaminoto",
        correctOption: "optionD"
    },

    {
        question: "SI mengalami perpecahan ideologi akibat pengaruh?",
        optionA: "Nasionalisme",
        optionB: "Sosialisme",
        optionC: "Komunisme",
        optionD: "Kapitalisme",
        correctOption: "optionC"
    },

  
    {
        question: "Kelompok komunis dalam Sarekat Islam dikenal dengan nama?",
        optionA: "Sarekat Islam Merah",
        optionB: "Sarekat Islam Putih",
        optionC: "Partai Komunis Hindia",
        optionD: "Sarekat Rakyat",
        correctOption: "optionA"
    },


    {
        question: "Sarekat Islam terpecah pada tahun?",
        optionA: "1916",
        optionB: "1921",
        optionC: "1918",
        optionD: "1923",
        correctOption: "optionB"
    },

    {
        question: "Pemimpin Sarekat Islam Putih adalah?",
        optionA: "Semaun",
        optionB: "H.O.S. Tjokroaminoto",
        optionC: "Darsono",
        optionD: "Agus Salim",
        correctOption: "optionD"
    },

    {
        question: "Tujuan utama Sarekat Islam setelah menjadi partai politik adalah?",
        optionA: "Kemerdekaan Indonesia",
        optionB: "Reformasi pendidikan",
        optionC: "Memajukan perdagangan",
        optionD: "Menyebarkan agama Islam",
        correctOption: "optionA"
    },

    {
        question: "Sarekat Islam pertama kali mengadakan kongres nasional pada tahun?",
        optionA: "1912",
        optionB: "1918",
        optionC: "1916",
        optionD: "1920",
        correctOption: "optionC"
    },

    {
        question: "Fokus perjuangan Sarekat Islam adalah?",
        optionA: "Penyatuan umat Islam dan kemerdekaan Indonesia",
        optionB: "Perlawanan bersenjata",
        optionC: "Peningkatan pendidikan",
        optionD: "Reformasi sosial",
        correctOption: "optionA"
    },

    {
        question: "Sarekat Islam memiliki anggota terbesar di kalangan?",
        optionA: "Petani",
        optionB: "Buruh",
        optionC: "Pedagang",
        optionD: "Pegawai negeri",
        correctOption: "optionC"
    },

    {
        question: "Tokoh Sarekat Islam yang menjadi bagian penting dalam perjuangan kemerdekaan adalah?",
        optionA: "Haji Samanhudi",
        optionB: "Semaun",
        optionC: "Tirto Adhi Soerjo",
        optionD: "Agus Salim",
        correctOption: "optionD"
    },

    {
        question: "Organisasi yang menggantikan Sarekat Islam setelah perpecahan adalah?",
        optionA: "Partai Sarekat Islam Indonesia",
        optionB: "Sarekat Rakyat",
        optionC: "Partai Nasional Indonesia",
        optionD: "Indische Partij",
        correctOption: "optionA"
    },

    {
        question: "SI menjadi organisasi berbasis massa karena?",
        optionA: "Memiliki ideologi yang kuat",
        optionB: "Anggotanya berasal dari seluruh Indonesia",
        optionC: "Berfokus pada kemerdekaan",
        optionD: "Memiliki anggota terbanyak pada masanya",
        correctOption: "optionD"
    },

    {
        question: "Perpecahan dalam Sarekat Islam disebabkan oleh?",
        optionA: "Tekanan pemerintah kolonial",
        optionB: "Perbedaan ideologi antara Islam dan Komunis",
        optionC: "Perbedaan wilayah",
        optionD: "Masalah keuangan organisasi",
        correctOption: "optionB"
    },

    {
        question: "21.	Tokoh Sarekat Islam yang menulis banyak buku tentang ideologi Islam adalah?",
        optionA: ". H.O.S. Tjokroaminoto",
        optionB: "Agus Salim",
        optionC: "Tirto Adhi Soerjo",
        optionD: "Semaun",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "1925",
        optionB: "1921",
        optionC: "1930",
        optionD: "1920",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
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
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
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

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
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