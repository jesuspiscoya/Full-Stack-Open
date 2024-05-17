import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const StatisticsConditional = ({ good, neutral, bad, all }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = `${(good / total) * 100 || 0} %`;

  if (all.length === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={total} />
        <Statistic text="Average" value={average} />
        <Statistic text="Positive" value={positive} />
      </tbody>
    </table>
  );
};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all.concat("G"));
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all.concat("N"));
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all.concat("B"));
  };

  return (
    <>
      <Header text="Give feedback" />
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Header text="Statistics" />
      <StatisticsConditional
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
      />
    </>
  );
};
