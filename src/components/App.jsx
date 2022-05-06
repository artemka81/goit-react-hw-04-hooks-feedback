import { Component } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // Обновляем значения state
  updateStateCount = item => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1,
      };
    });
  };
  // Считаем общее кол-во отзывов
  totalCoutFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // Считаем процент позитных отзывов
  positivePercentage = () => {
    const { good } = this.state;
    const total = this.totalCoutFeedback();
    return good !== 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const options = Object.entries(this.state);
    const total = this.totalCoutFeedback();
    const positivePercentage = this.positivePercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateStateCount}
          />
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
  }
}
