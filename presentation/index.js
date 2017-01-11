// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  thehaps: require("../assets/PLAYD8S_logo.png"),
  road: require("../assets/road.jpg"),
  roadblock: require("../assets/roadblock.jpg"),
  concert: require("../assets/concert.jpg"),
  addEvent: require("../assets/add_event.gif"),
  detailview: require("../assets/detailview.gif"),
  filter: require("../assets/filter.gif"),
  listview: require("../assets/listview.gif"),
  mapview: require("../assets/DemoShot.jpg"),
  github: require("../assets/github.png"),
  googlemap: require("../assets/IGDB.jpg"),
  heroku: require("../assets/heroku.png"),
  js: require("../assets/js.png"),
  materialize: require("../assets/materialize.png"),
  momentjs: require("../assets/html5.png"),
  mongodb: require("../assets/mongodb.png"),
  nodejs: require("../assets/nodejs.png"),
  react: require("../assets/react.png"),
  redux: require("../assets/steam.png")
};

preloader(images);

const theme = createTheme({
  primary: "#40c4ff",
  // primary: "#3498DB",
  secondary: "#2C3E50"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="scion" style={{paddingTop: "0"}}>
            <Image src={images.thehaps} height="293px"/>
            <Appear><Heading size={4} textColor="primary" textFont="white">
          http://playd8s.herokuapp.com/games
            </Heading></Appear>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.concert} bgDarken={0.75}>
            <Heading size={2} caps textColor="white" textFont="primary">
              The Solution:
            </Heading>
            <BlockQuote>
              <Quote>A Place Where Games Can Go To Meet & Match With Other Gamers.</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.mapview}>
            <Layout>
            </Layout>
              </Slide>
            <Slide transition={["slide"]} bgImage={images.roadblock} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary" textFont="primary">
              Features
              </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.roadblock} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary" textFont="primary">
          Roadblocks
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="scion">
            <Image src={images.js} height="170px" style={{margin: "10px"}} />
            <Image src={images.github} height="170px" style={{margin: "10px"}} />
            <Image src={images.googlemap} height="170px" style={{margin: "10px"}} />
            <Image src={images.heroku} height="170px" style={{margin: "10px"}} />
            <Image src={images.materialize} height="170px" style={{margin: "10px"}} />
            <Heading size={2} caps fit textColor="white" textFont="primary" style={{padding: "10px"}}>
              Technology Stack
            </Heading>
            <Image src={images.momentjs} height="170px" style={{margin: "10px"}}/>
            <Image src={images.mongodb} height="170px" style={{margin: "10px"}}/>
            <Image src={images.nodejs} height="170px" style={{margin: "10px"}}/>
            <Image src={images.react} height="170px" style={{margin: "10px"}}/>
            <Image src={images.redux} height="170px" style={{margin: "10px"}}/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
