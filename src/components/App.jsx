import { Component } from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

export class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Section title="Please leave feedback" />
      </Container>
    );
  }
}
