import React, { useState } from "react"
import StoryPage from "./components/StoryPage.jsx"
import QuestionPage from "./components/QuestionPage.jsx"
import FinalInvite from "./components/FinalInvite.jsx"

function App() {
  const [stage, setStage] = useState(0); 

  const handleNext = () => {
    setStage(prevStage => prevStage + 1);
  };

  return (
    <div>
      {stage === 0 && <StoryPage onNext={handleNext} />}
      {stage === 1 && <QuestionPage onComplete={handleNext} />}
      {stage === 2 && <FinalInvite />}
    </div>
  );
}

export default App;

