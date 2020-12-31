import React from "react";
import Content from "./components/Content";
import { Pagemap } from "./components/Pagemap";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.pageMapOptions = {
      selector: {
        "h1,a": "rgba(0,0,0,0.8)",
        "h2,h3,h4": "rgba(0,0,0,0.4)",
        "header,footer,section,article": "rgba(0,0,0,0.1)",
        div: "rgba(0,0,0,0.1)"
      },
      width: 50,
      height: 200,
      background: "rgba(0,0,0,0.02)",
      drag: "rgba(0,0,0,0.2)",
      viewport: "rgba(0,0,0,0.1)"
    };
  }

  render() {
    return (
      <div className="App">
        <Pagemap container={this.contentRef} options={this.pageMapOptions} />
        <Content ref={this.contentRef} />
      </div>
    );
  }
}

export default App;
