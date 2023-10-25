import React, {  useState } from 'react'
import './App.css'
function App() {
  const javaQuestions = [
    { id:1,
      question: "What is the result of 2 + 2 in Java?",
      options: [
        { text: "3", status: "wrong" },
        { text: "4", status: "right" },
        { text: "5", status: "wrong" },
        { text: "6", status: "wrong" },
      ],
    },
    { id:2,
      question: "Which keyword is used to declare a method in Java?",
      options: [
        { text: "method", status: "wrong" },
        { text: "function", status: "wrong" },
        { text: "void", status: "wrong" },
        { text: "public", status: "right" },
      ],
    },
    { id:3,
      question: "What is the data type of the elements in an array of integers in Java?",
      options: [
        { text: "int[]", status: "wrong" },
        { text: "integer[]", status: "wrong" },
        { text: "int", status: "right" },
        { text: "integer", status: "wrong" },
      ],
    },
    { id:4,
      question: "Which statement is used to exit a loop in Java?",
      options: [
        { text: "leave", status: "wrong" },
        { text: "exit", status: "wrong" },
        { text: "break", status: "right" },
        { text: "return", status: "wrong" },
      ],
    },
    { id:5,
      question: "What is the correct way to create a new instance of a class in Java?",
      options: [
        { text: "Classname object = new Object();", status: "wrong" },
        { text: "Object object = new Object();", status: "wrong" },
        { text: "Object object = a Classname();", status: "right" },
        { text: "Classname object = new Classname();", status: "wrong" },
      ],
    },
    { id:6,
      question: "Which operator is used to compare two values for equality in Java?",
      options: [
        { text: "===", status: "right" },
        { text: "=", status: "wrong" },
        { text: "===", status: "wrong" },
        { text: "!=", status: "wrong" },
      ],
    },
    { id:7,
      question: "In Java, what is the maximum value that an integer data type (int) can hold?",
      options: [
        { text: "32,767", status: "wrong" },
        { text: "65,535", status: "wrong" },
        { text: "2,147,483,647", status: "right" },
        { text: "4,294,967,295", status: "wrong" },
      ],
    },
    { id:8,
      question: "Which of the following is not a valid access modifier in Java?",
      options: [
        { text: "public", status: "wrong" },
        { text: "private", status: "wrong" },
        { text: "friendly", status: "right" },
        { text: "protected", status: "wrong" },
      ],
    },
    { id:9,
      question: "What is the output of 'System.out.println(\"Hello, World!\")' in Java?",
      options: [
        { text: "Hello, World!", status: "right" },
        { text: "System.out.println(\"Hello, World!\")", status: "wrong" },
        { text: "null", status: "wrong" },
        { text: "Error", status: "wrong" },
      ],
    },
    { id:10,
      question: "Which Java keyword is used to define a subclass of a class?",
      options: [
        { text: "extends", status: "right" },
        { text: "sub", status: "wrong" },
        { text: "inherits", status: "wrong" },
        { text: "derive", status: "wrong" },
      ],
    },
  ];
  let [question_index, setQuestionIndex]=useState(0);
 let [Scorecounter,setScorecounter]=useState([])
 const [clickedOptions, setClickedOptions] = useState(javaQuestions.map(() => Array(4).fill(false)));
const [resultshow,setresultshow]=useState(false)

let scorer=(question_index,option_index)=>{
  const newArray=[...Scorecounter];
  newArray[question_index]=javaQuestions[question_index].options[option_index].status;
  
  setScorecounter(newArray);

  const newClickedOptions = [...clickedOptions];
    newClickedOptions[question_index][option_index] = true;
    if(option_index===0){
      newClickedOptions[question_index][1] = false;
      newClickedOptions[question_index][2] = false;
      newClickedOptions[question_index][3] = false;
    }
    else if(option_index===1)
    {
      newClickedOptions[question_index][0] = false;
      newClickedOptions[question_index][2] = false;
      newClickedOptions[question_index][3] = false;
}
else if(option_index===2)
{
  newClickedOptions[question_index][1] = false;
  newClickedOptions[question_index][0] = false;
  newClickedOptions[question_index][3] = false;
}
else{
  newClickedOptions[question_index][1] = false;
  newClickedOptions[question_index][0] = false;
  newClickedOptions[question_index][2] = false;
}


    setClickedOptions(newClickedOptions);

}
const [score,setscore]=useState()
let tellScore = () => {
  let tempScore = 0;
  Scorecounter.forEach((item) => {
    if (item === "right") {
      tempScore++;
    }
  });
  setscore(tempScore); // Update the score based on the total number of correct answers
  setresultshow(true);
};

   
  
  
// let score;

  
  

  const next = () => {
    if ( question_index<javaQuestions.length-1) {
      
      setQuestionIndex(question_index+1);
    } else {
     setQuestionIndex(0)
    }
  };
  
  const prev = () => {
    if (question_index > 0) {
      setQuestionIndex(question_index - 1);
    }

  }


  const restartQuiz = () => {
    setQuestionIndex(0);
    setScorecounter([]);
    setClickedOptions(javaQuestions.map(() => Array(4).fill(false)));
    setresultshow(false);
    setscore(0)
  };
  return (
    <div>
    
          <div className="container">
            
        { resultshow?(       <div> your score is : {score} <button onClick={()=>restartQuiz()} >restart quiz</button></div>
        ):(
          <>
          <div className="question" ><h3><>Question({question_index}):</>{javaQuestions[question_index].question}</h3></div>
         {/* {javaQuestions[question_index].options.map((option,index)=>(
           <div className="option" key={index}  ><button >{String.fromCharCode(65+index)}:{option.text}</button></div>
          ))} */}
          
          <div className="optiona "><button className={`option-button ${clickedOptions[question_index][0] ? 'clicked' : ''}`} onClick={()=>scorer(question_index,0)} >A:{javaQuestions[question_index].options[0].text}</button></div>
          <div className="optionb"><button  className={`option-button ${clickedOptions[question_index][1] ? 'clicked' : ''}`} onClick={()=>scorer(question_index,1)}> B:{javaQuestions[question_index].options[1].text}</button></div>
          <div className="optionc"><button  className={`option-button ${clickedOptions[question_index][2] ? 'clicked' : ''}`} onClick={()=>scorer(question_index,2)}> C:{javaQuestions[question_index].options[2].text}</button></div>
          <div className="optiond"><button  className={`option-button ${clickedOptions[question_index][3] ? 'clicked' : ''}`} onClick={()=>scorer(question_index,3)}> D:{javaQuestions[question_index].options[3].text}</button></div>

          <div className="nav prev"><button onClick={prev}>prev</button></div>
          <div className="nav next"><button onClick={next}>next</button></div>
          <div className="submit"><button onClick={tellScore}>submit test and show result</button></div>
        </>
        )

        }
        
        </div>
 
     
    </div>
  )
}

export default App
