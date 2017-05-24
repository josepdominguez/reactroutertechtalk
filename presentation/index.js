import React from "react";
import Logo from "./logo";
import styles from "../css/styles.css";

import {
  CodePane, Deck, S, BlockQuote, Quote, Cite,
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

        <Slide transition={["zoom"]} bgColor="primary"
               notes="- I will talk about React Router.
- This library started development in mid 2014
- It's the most used library for routing React Applications.
- Unlike other libraries like Redux or Drag'n'Drop, the creators are not part of Facebook, but a group called ReactTraining.
- Now it's in V.4. It's been a bit controversial as each new version was not backwards compatible, which made some developers to complain.
- NextSlide">
          <Text textColor="tertiary" bold>Introduction to React Router v.4</Text>
          <Heading size={4} caps lineHeight={1} textColor="secondary">Tech-Talk</Heading>
          <S type="italic" textColor="secondary" textSize="20px" lineHeight={1}>A LIBRARY FOR ROUTING YOUR APP</S>
          <Logo />
          <Text style={{ fontSize: "20px" }} margin="10px 0 0" textColor="secondary">
            <span style={{ color: "#fff" }}>Josep Dominguez Leon</span> @ <span style={{ color: "red" }}>DMI</span> Phnom Penh 2017
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary"
               notes="-https://www.npmjs.com/package/react-router4<br/>
- According to the creators, changes won't be so dramatic from now on<br/>
- In V.5 they will probably change everything and say the same.">
          <BlockQuote>
            <Quote style={{ fontSize: "28px" }}>Our previous API was fighting against React. With v4, our only API is components
             that receive props, so, <u>it's hard to imagine a big change again</u>. Now that we're embracing
             (not fighting) React's declarative composability, we think this API will last as long as
             React itself, because that's all it is.</Quote>
            <Cite>https://www.npmjs.com/package/react-router4</Cite>
          </BlockQuote>
        </Slide>
        <Slide notes="FE is taking over the role previously done by servers">
          <Heading size={3} textColor="tertiary">What is React Router?</Heading>
          <Text textColor="secondary" margin="20px 0 0">
            React Router is a Javascript library that works on top of React. It helps in managing the routes of your SPA.
          </Text>
        </Slide>

        <Slide notes="Two packages available depending on our needs">
          <Heading size={3} textColor="tertiary">Only for web?</Heading>
        </Slide>
        <Slide notes="">
          <Text textColor="secondary">
            No.<br/><br/>
          </Text>

          <List textColor="secondary">
            <ListItem>React web apps: <b>react-router-dom</b></ListItem>
            <ListItem>React Native apps: <b>react-router-native</b></ListItem>
          </List>
        </Slide>
        <Slide notes="Different principle than Angular, where everything is included. Both approaches have pros and cons.">
          <Heading size={5} textColor="tertiary">Why do you need React Router?</Heading>
          <List textSize="30px" textColor="secondary">
            <ListItem>Maybe you don't. That's why it's detached from React.</ListItem>
            <ListItem>Helps defining what happens in each route.</ListItem>
            <ListItem>Keeps UI in sync with the route.</ListItem>
            <ListItem>Provides components to change the route, e.g, "Link" component.</ListItem>
          </List>
        </Slide>
        <Slide notes="">
          <Heading size={1} textColor="tertiary">How it works?</Heading>
        </Slide>
        <Slide notes="Import the dom version">
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
          notes="- Out of this 3 lines, only the one matching the route will be rendered
        - The 'exact' param ensures that only such route is matched. If no 'exact' '/2' could be accepted as '/'.

        &lt;Route path='/roster'/&gt;<br/>
         when the pathname is '/', the path does not match
         when the pathname is '/roster' or '/roster/2', the path matches
         If you only want to match '/roster', then you need to use
         the 'exact' prop. The following will match '/roster', but not
         '/roster/2'
         <br/>
        &lt;Route exact path='/roster'/&gt;
        Example:
        https://reacttraining.com/react-router/web/example/basic"
          ranges={[
            { loc: [0, 18], title: "Basic code structure" },
            { loc: [1, 2], title: "Put the app inside a Router wrapper" },
            { loc: [15, 16], title: "Put the app inside a Router wrapper" },
            { loc: [4, 7], title: "Create the navigation" },
            { loc: [11, 14], title: "Put the routes in the spot" }
          ]}
        />
        <CodeSlide
            notes="Stateless component<br/>
            https://reacttraining.com/react-router/web/example/basic"
          lang="jsx"
          code={require("raw-loader!../assets/components.example")}
          textSize="20"
          ranges={[
            { loc: [0, 18], title: "Components" }
          ]}
        />
        <CodeSlide
            notes=""
          lang="jsx"
          code={require("raw-loader!../assets/complexComponents.example")}
          textSize="15"
          ranges={[
            { loc: [0, 27], title: "Passing parameters" },
            { loc: [28, 33], title: "Passing parameters" }
          ]}
        />
        <Slide notes="">
          <Heading size={3} textColor="tertiary">Two types of &lt;Router&gt;</Heading>
        </Slide>
        <Slide notes="HashRouter: No browser compatibility problems">
          <Text textColor="secondary">www.example.com/#/users<br/><br/>
          <b>HashRouter</b>. Hash portion of the URL</Text>
        </Slide>
        <Slide notes="BrowserRouter">
          <Text textColor="secondary">www.example.com/users<br/><br/>
          <b>BrowserRouter</b>. Uses HTML5 History API</Text>
        </Slide>
        <Slide notes="Imagine our customer tells us, wants to enter your page, but I want the list to be ordered by Creation Date, and the city Filter only for Phnom Penh.">
          <Heading size={3} textColor="tertiary">Several URL params</Heading>
        </Slide>
        <Slide notes="">
          <Text textSize="30" textColor="secondary">www.example.com/users/searchcity/Phnom+Penh/order/ascendant/isactive/true </Text>
        </Slide>
        <Slide notes="">
          <Text textSize="30" textColor="secondary">www.example.com/users?searchcity=Phnom+Penh&order=ascendant&isactive=true </Text>
        </Slide>
        <Slide notes="">
          <Heading size={3} textColor="tertiary">Other features covered in documentation</Heading>
          <List textSize="30px" textColor="secondary">
            <ListItem>Code Splitting (loading modules on demand)</ListItem>
            <ListItem>Redux Integration</ListItem>
            <ListItem>Server Rendering</ListItem>
            <ListItem>Authentication</ListItem>
            <ListItem>Transitions</ListItem>
            <ListItem>Redirections for non existing URLs</ListItem>
          </List>
        </Slide>
        <Slide notes="">
          <Heading size={5} textColor="tertiary">Are there other alternatives?</Heading>
          <Text textColor="secondary" textSize="35" margin="20px 0 0">
            Yes.<br/>There are other packages, less mature and smaller community.
          </Text>
        </Slide>
        <Slide notes="">
          <Heading size={5} textColor="tertiary">More information</Heading>
          <List textSize="30px" textColor="secondary">
            <ListItem>https://www.npmjs.com/package/react-router4</ListItem>
            <ListItem>https://reacttraining.com/react-router/</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
