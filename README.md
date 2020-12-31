# simple-react-pagemap

Simple pagemap component inspired by https://github.com/lrsjng/pagemap created in React.

# Usage

`import { Pagemap } from "./components/Pagemap";`

## Props

`container`: the reference of the viewport
`options.selector`: style for html elements inside the canvas
`options.width`: canvas width
`options.height`: canvas height
`options.background`: canvas background
`options.drag`: viewport drag color
`options.viewport`: viewport color

## Options

```javascript
options = {
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
```

## Example

```html
<div className="App">
  <Pagemap container="{this.contentRef}" options="{this.pageMapOptions}" />
  <content ref="{this.contentRef}" />
</div>
```
