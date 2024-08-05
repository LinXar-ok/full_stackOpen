import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState();
  const [feedbackScore, setFeedbackScore] = useState([]);

  const handleGood = () => {
    const goodCount = good + 1;
    setGood(goodCount);
    setTotalFeedback(goodCount + neutral + bad);
    setFeedbackScore(feedbackScore.concat(1));
  };
  const handleNeutral = () => {
    const neutralCount = neutral + 1;
    setNeutral(neutralCount);
    setTotalFeedback(neutralCount + good + bad);
    setFeedbackScore(feedbackScore.concat(0));
    console.log(feedbackScore);
  };
  const handleBad = () => {
    const badCount = bad + 1;
    setBad(badCount);
    setTotalFeedback(badCount + neutral + good);
    setFeedbackScore(feedbackScore.concat(-1));
    console.log(feedbackScore);
  };

  const scoreSum = feedbackScore.reduce((acc, score) => acc + score, 0);

  const averageScore = scoreSum / feedbackScore.length;

  const positiveFeedback = feedbackScore.filter((score) => score === 1).length;

  const percentagePositiveScore = (positiveFeedback / totalFeedback) * 100;

  const formattedPositivePercentage = `${percentagePositiveScore} %`;
  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGood} text="Good" />
        <Button handleClick={handleNeutral} text="Neutral" />
        <Button handleClick={handleBad} text="Bad" />
      </div>

      <div>
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          averageScore={averageScore}
          percentagePositiveScore={formattedPositivePercentage}
        />
      </div>
    </div>
  );
};

export default App;

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tr>
          <td>{text}: &nbsp;&nbsp;</td>

          <td>{value}</td>
        </tr>
      </table>
    </div>
  );
};

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h4>No Feedback Given.</h4>
      </div>
    );
  }
  return (
    <div>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />

      <StatisticLine text="Total Feedback" value={props.totalFeedback} />

      <StatisticLine text="Average Score" value={props.averageScore} />

      <StatisticLine
        text="Positive Score"
        value={props.percentagePositiveScore}
      />
    </div>
  );
};
