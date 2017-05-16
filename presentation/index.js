import React from "react";
import Clock from "./clock";
import styles from "../css/styles.css";

import {
  BlockQuote, Cite, CodePane, Deck, S,
  Heading, Image, ListItem, List, Quote, Slide, Text,
  Table, TableRow, TableItem
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/formidable-logo.svg"),
  reactLogo: require("../assets/react-logo.svg"),
  lifeCycle: require("../assets/reactLifeCycle.png")
};

preloader(images);

const theme = createTheme({
  primary: "#444444",
  secondary: "white",
  tertiary: "#CA4245",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="pacman">

        <Slide transition={["zoom"]} bgColor="primary">
          <Text textColor="tertiary" bold>React Router v.4</Text>
          <Heading size={4} caps lineHeight={1} textColor="secondary">Tech-Talk</Heading>
          <S type="italic" textColor="secondary" textSize="20" lineHeight={1}>A JAVASCRIPT LIBRARY FOR ROUTING YOUR APP</S>

          <div className={"logo-wrapper"}>
            <div className={"logo-wrapper__position"}>
              <Image className={"logo"} src={"data:image/png;base64,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"} />
            </div>
          </div>
          <Text style={{ fontSize: "20px" }} margin="10px 0 0" textColor="secondary">
            <span style={{ color: "#fff" }}>Josep Dominguez Leon</span> @ <span style={{ color: "red" }}>DMI</span> Phnom Penh 2017
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">What is React Router?</Heading>
          <Text textColor="secondary" margin="20px 0 0">
            React Router is a Javascript package that works over React. It helps you in managing the routes of your SPA.
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">Only for web?</Heading>
        </Slide>
        <Slide>
          <Text textColor="secondary">
            No.<br/><br/>
          </Text>

          <List textColor="secondary">
            <ListItem>Webapps: <b>react-router-dom</b> <span style={{ fontSize: "20px" }}> (tech talk focus)</span></ListItem>
            <ListItem>React Native apps: <b>react-router-native</b></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">Why do you need a Router?</Heading>
          <List textSize="30px" textColor="secondary">
            <ListItem>It allows you to define what happens in each route of your app.</ListItem>
            <ListItem>It keeps your UI in sync with the route.</ListItem>
            <ListItem>Provides components to change the route, e.g, "Link" component.</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">Do you need a Router in every application?</Heading>
          <Text textColor="secondary">
            Probably not in small applications doing simple tasks, like, "ToDo list".<br/> <b>That's why it's detached from React. </b>
          </Text>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">First step: import</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/routerImport.example")}
            margin="20px auto"
            textSize="25"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">Put the app inside a Router wrapper</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/wrapApp.example")}
            margin="20px auto"
            textSize="22"
          />
        </Slide>
        <Slide>
          <Heading size={1} textColor="tertiary">Components</Heading>

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/funcComponent.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/classComponent.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/declareComponent.example")}
            margin="20px auto"
            textSize="20"
          />
        </Slide>

        <Slide>
          <Heading size={6} bold textColor="quartenary">Components</Heading>
          <Heading size={4} textColor="tertiary">Props</Heading>

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/funcComponentProp.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/classComponentProp.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/declareComponentProp.example")}
            margin="20px auto"
            textSize="20"
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={4} bold textColor="quartenary">Components</Heading>
          <Heading size={2} textColor="tertiary">States</Heading>

          <BlockQuote>
            <Quote textSize="30px">
              The heart of every React component is its “state”, an object that determines how that component renders & behaves.
              In other words, “state” is what allows you to create components that are dynamic and interactive.
            </Quote>
          </BlockQuote>

          <Heading size={4} >vs. Props</Heading>
          <Text textSize="30px">
            Properties are defined when components are created, whether by JSX or by pure JavaScript.
            State, on the other hand, is only seen on the inside of component definitions.
            This is the first, and most important difference between the two.
          </Text>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/clockComponent.example")}
          ranges={[
            { loc: [0, 270], title: "Component States" },
            { loc: [0, 1], title: "Creating Component named Clock" },
            { loc: [3, 4], title: "Setting initial state of the Component" },
            { loc: [7, 11], title: "Creating the timer" },
            { loc: [17, 22], title: "Update the component state",
              note: "This function will run every seconds to update component's state object with current date"
            },
            { loc: [27, 28], title: "Get date from component's state" }
          ]}
        />

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="tertiary" style={{ margin: "0 0 30px" }}>VIRTUAL DOM DEMO 🎊</Heading>
          <Clock />
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">Component Lifecycle</Heading>
          <Image src={images.lifeCycle} style={{ height: "600px", margin: "0 0 50px" }} />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/clockComponent.example")}
          ranges={[
            { loc: [0, 0], title: "Component Lifecycle" },
            { loc: [6, 12], title: "componentDidMount",
              note: "The componentDidMount() hook runs after the component output has been rendered to the DOM. " +
              "This is a good place to set up a timer."
            },
            { loc: [13, 16], title: "componentWillUnmount",
              note: "The componentWillUnmount() hook runs when the component removed from the DOM. " +
            "This is a good place to destroy timer."
            },
            { loc: [23, 31], title: "render", note: "The render() hook is a place to prepare component " +
            "output. Runs when component mounted and after \"every\" state changes."
            }
          ]}
        />

        <Slide>
          <Table>
            <tbody>
            <TableRow>
              <TableItem>
                <List>
                  <ListItem textSize="30px">react-dom</ListItem>
                  <ListItem textSize="30px">react-native</ListItem>
                  <ListItem textSize="30px">react-vr</ListItem>
                  <ListItem textSize="30px">react-router</ListItem>
                  <ListItem textSize="30px">react-redux</ListItem>
                  <ListItem textSize="30px">webpack</ListItem>
                  <ListItem textSize="30px">react-helmet</ListItem>
                  <ListItem textSize="30px">react-motion</ListItem>
                  <ListItem textSize="30px">reactide</ListItem>
                  <ListItem textSize="30px">react-datasheet</ListItem>
                  <ListItem textSize="30px">react-modal</ListItem>
                  <ListItem textSize="30px">react-native-windows</ListItem>
                  <ListItem textSize="30px">react-joyride</ListItem>
                </List>
              </TableItem>
              <TableItem>
                <List>
                  <ListItem textSize="30px">preact</ListItem>
                  <ListItem textSize="30px">inferno</ListItem>
                  <ListItem textSize="30px">react-intl</ListItem>
                  <ListItem textSize="30px">react-cookie</ListItem>
                  <ListItem textSize="30px">create-react-native-app</ListItem>
                  <ListItem textSize="30px">react-sketchapp</ListItem>
                  <ListItem textSize="30px">react-dnd</ListItem>
                  <ListItem textSize="30px">react-slick</ListItem>
                  <ListItem textSize="30px">code-push</ListItem>
                  <ListItem textSize="30px">react-lazyload</ListItem>
                  <ListItem textSize="30px">react-md</ListItem>
                  <ListItem textSize="30px">react-styleguidist</ListItem>
                  <ListItem textSize="30px">react-dev-tool</ListItem>
                </List>
              </TableItem>
            </TableRow>
            </tbody>
          </Table>
        </Slide>

        <Slide>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/thankyou.example")}
            margin="20px auto"
            textSize="40px"
          />
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">Are there other alternatives?</Heading>
          <Text textColor="secondary" textSize="35" margin="20px 0 0">
            Yes.<br/>There are oth
          </Text>
        </Slide>
      </Deck>
    );
  }
}
