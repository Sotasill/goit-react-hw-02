import { useState, useEffect } from "react";
import "modern-normalize/modern-normalize.css";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";


const startPosition = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const storagedFeedback = localStorage.getItem("feedback");
    if (storagedFeedback !== null) {
      return JSON.parse(storagedFeedback);
    }
    return startPosition;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    document.title = totalFeedback
      ? `Positive feedback ${positiveFeedback}%`
      : "No feedback yet";
  }, [positiveFeedback, totalFeedback]);

  function updateFeedback(feedbackType) {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setFeedback(startPosition);
  }

  return (
    <div className="container">
      <Description />
      <Options
        options={Object.keys(feedback)}
        setter={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification/>
      )}
    </div>
  );
}

export default App;
