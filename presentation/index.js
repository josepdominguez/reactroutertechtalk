import React from "react";
import Logo from "./logo";
import styles from "../css/styles.css";

import {
  CodePane, Deck, S,
  Heading, ListItem, List, Slide, Text
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
          <Text textColor="tertiary" bold>Introduction to React Router v.4</Text>
          <Heading size={4} caps lineHeight={1} textColor="secondary">Tech-Talk</Heading>
          <S type="italic" textColor="secondary" textSize="20px" lineHeight={1}>A JAVASCRIPT LIBRARY FOR ROUTING YOUR APP</S>
          <Logo />
          <Text style={{ fontSize: "20px" }} margin="10px 0 0" textColor="secondary">
            <span style={{ color: "#fff" }}>Josep Dominguez Leon</span> @ <span style={{ color: "red" }}>DMI</span> Phnom Penh 2017
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">What is React Router?</Heading>
          <Text textColor="secondary" margin="20px 0 0">
            React Router is a Javascript library that works on top of React. It helps in managing the routes of your SPA.
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
        <CodeSlide
          lang="jsx"
          code={require("raw-loader!../assets/wrapApp.example")}
          textSize="20"
          ranges={[
            { loc: [0, 18], title: "Basic code structure" },
            { loc: [1, 2], title: "Put the app inside a Router wrapper" },
            { loc: [15, 16], title: "Put the app inside a Router wrapper" },
            { loc: [4, 7], title: "Create the navigation" },
            { loc: [11, 14], title: "Put the routes in the spot" }
          ]}
        />
        <CodeSlide
          lang="jsx"
          code={require("raw-loader!../assets/components.example")}
          textSize="20"
          ranges={[
            { loc: [0, 18], title: "Components" }
          ]}
        />
        <CodeSlide
          lang="jsx"
          code={require("raw-loader!../assets/complexComponents.example")}
          textSize="15"
          ranges={[
            { loc: [0, 27], title: "Passing parameters" },
            { loc: [28, 33], title: "Passing parameters" }
          ]}
        />
        <Slide>
          <Heading size={3} textColor="tertiary">Two types of &lt;Router&gt;</Heading>
        </Slide>
        <Slide>
          <Text textColor="secondary">www.example.com/users<br/><br/>
          <b>BrowserRouter</b>. Uses HTML5 History API</Text>
        </Slide>
        <Slide>
          <Text textColor="secondary">www.example.com/#/users<br/><br/>
          <b>HashRouter</b>. Hash portion of the URL</Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">Several URL params</Heading>
        </Slide>
        <Slide>
          <Text textSize="30" textColor="secondary">www.example.com/users/searchcity/Phnom+Penh/order/ascendant/isactive/true </Text>
        </Slide>
        <Slide>
          <Text textSize="30" textColor="secondary">www.example.com/users?searchcity=Phnom+Penh&order=ascendant&isactive=true </Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">Other features covered in documentation</Heading>
          <List textSize="30px" textColor="secondary">
            <ListItem>Server Rendering</ListItem>
            <ListItem>Code Splitting (loading modules on demand)</ListItem>
            <ListItem>Redux Integration</ListItem>
          </List>
        </Slide>        
        <Slide>
          <Heading size={5} textColor="tertiary">Are there other alternatives?</Heading>
          <Text textColor="secondary" textSize="35" margin="20px 0 0">
            Yes.<br/>There are other packages, less mature and smaller community.
          </Text>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">More information</Heading>
          <Text textColor="secondary" textSize="35" margin="20px 0 0">
            https://www.npmjs.com/package/react-router4
          </Text>
        </Slide>
      </Deck>
    );
  }
}
