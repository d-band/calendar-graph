Calendar Graph
===========

> Calendar graph library using jsx support SVG, Canvas and SSR

[![NPM version](https://img.shields.io/npm/v/calendar-graph.svg)](https://www.npmjs.com/package/calendar-graph)
[![NPM downloads](https://img.shields.io/npm/dm/calendar-graph.svg)](https://www.npmjs.com/package/calendar-graph)
[![Greenkeeper badge](https://badges.greenkeeper.io/d-band/calendar-graph.svg)](https://greenkeeper.io/)

## Install

```bash
$ npm install calendar-graph --save
```

## Usage

[View demo online](https://d-band.github.io/calendar-graph/)

```javascript
import { SVGGraph, CanvasGraph, StrGraph } from 'calendar-graph';

const data = [
  { date: '2016-01-01', count: 1 },
  { date: '2016-01-03', count: 4 },
  { date: '2016-01-06', count: 2 },
  // ...and so on
];

new SVGGraph('#svg-root', data, {
  startDate: new Date('2016-01-01'),
  endDate: new Date('2016-04-01'),
  colorFun: (v) => {
    return '#d6e685';
  }
});

new CanvasGraph('#canvas-root', data, {
  startDate: new Date('2016-01-01'),
  endDate: new Date('2016-04-01'),
  colorFun: (v) => {
    return '#d6e685';
  }
});

const strGraph = new StrGraph(data, {
  startDate: new Date('2016-01-01'),
  endDate: new Date('2016-04-01'),
  colorFun: (v) => {
    return '#d6e685';
  }
});
this.body = strGraph.render();
```

![image](demo/image.png)

## Options

```javascript
{
  startDate: CurDate - 365 days,
  endDate: CurDate,
  colorFun: v => {},
  onClick: v => {}
}
```

## Report a issue

* [All issues](https://github.com/d-band/calendar-graph/issues)
* [New issue](https://github.com/d-band/calendar-graph/issues/new)

## License

Graph is available under the terms of the MIT License.
