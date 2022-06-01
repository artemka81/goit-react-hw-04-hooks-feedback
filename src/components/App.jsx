import { useState } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  // Передаем значение для начального состояния
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Обновляем значения состояния
  const updateStateCount = item => {
    switch (item) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const positivePercentage = () => {
    return good !== 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = good + neutral + bad;
  const optionsArr = { good, neutral, bad };
  const options = Object.entries(optionsArr);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={updateStateCount} />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistics
            options={options}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
