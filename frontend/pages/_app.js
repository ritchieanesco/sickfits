import App, { Container } from "next/app";
import Page from "../components/Page";

//Building a custom wrapper (app) with Next
//Below will be displayed on every page

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
