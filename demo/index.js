import { SVGGraph, CanvasGraph, StrGraph } from '../src';
import { today, oneYearAgo, diffDays, formatDate } from '../src/utils';

const data = getData();
const options = {
  onClick: (v) => {
    console.log(v);
  }
};
const svgGraph = new SVGGraph('#svg', data, options);
const canvasGraph = new CanvasGraph('#canvas', data, options);
const strGraph = new StrGraph(data, options);

function renderStr() {
  const dom = document.querySelector('#str');
  dom.textContent = formatXML(strGraph.render());
}

renderStr();

function rand() {
  return Math.floor(Math.random() * 50);
}

function getData() {
  const endDate = today();
  const startDate = oneYearAgo();
  const days = diffDays(startDate, endDate);
  const data = [];
  for (let i = 0; i <= days; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    const date = formatDate(d);
    const count = rand();
    data.push({ date, count });
  }
  return data;
}

function tooltipInit() {
  const tip = document.getElementById('tooltip');
  let elems = document.getElementsByClassName('cg-day');
  const mouseOver = function(e) {
    e = e || window.event;
    const elem = e.target || e.srcElement;
    const rect = elem.getBoundingClientRect();
    const count = elem.getAttribute('data-count');
    const date = elem.getAttribute('data-date');
    tip.style.display = 'block';
    tip.textContent = `${count} contributions on ${date}`;
    const w = tip.getBoundingClientRect().width;
    tip.style.left = `${rect.left - (w / 2) + 6}px`;
    tip.style.top = `${rect.top - 35}px`;
  };
  const mouseOut = function(e) {
    e = e || window.event;
    tip.style.display = 'none';
  };
  for (let i = 0; i < elems.length; i++) {
    if (document.body.addEventListener) {
      elems[i].addEventListener('mouseover', mouseOver, false);
      elems[i].addEventListener('mouseout', mouseOut, false);
    } else {
      elems[i].attachEvent('onmouseover', mouseOver);
      elems[i].attachEvent('onmouseout', mouseOut);
    }
  }
}

tooltipInit();

function formatXML (xml) {
  var reg = /(>)\s*(<)(\/*)/g; // updated Mar 30, 2015
  var wsexp = / *(.*) +\n/g;
  var contexp = /(<.+>)(.+\n)/g;
  xml = xml.replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
  var pad = 0;
  var formatted = '';
  var lines = xml.split('\n');
  var indent = 0;
  var lastType = 'other';
  // 4 types of tags - single, closing, opening, other (text, doctype, comment) - 4*4 = 16 transitions 
  var transitions = {
    'single->single': 0,
    'single->closing': -1,
    'single->opening': 0,
    'single->other': 0,
    'closing->single': 0,
    'closing->closing': -1,
    'closing->opening': 0,
    'closing->other': 0,
    'opening->single': 1,
    'opening->closing': 0,
    'opening->opening': 1,
    'opening->other': 1,
    'other->single': 0,
    'other->closing': -1,
    'other->opening': 0,
    'other->other': 0
  };

  for (var i = 0; i < lines.length; i++) {
    var ln = lines[i];

    // Luca Viggiani 2017-07-03: handle optional <?xml ... ?> declaration
    if (ln.match(/\s*<\?xml/)) {
      formatted += ln + '\n';
      continue;
    }

    var single = Boolean(ln.match(/<.+\/>/)); // is this line a single tag? ex. <br />
    var closing = Boolean(ln.match(/<\/.+>/)); // is this a closing tag? ex. </a>
    var opening = Boolean(ln.match(/<[^!].*>/)); // is this even a tag (that's not <!something>)
    var type = single ? 'single' : closing ? 'closing' : opening ? 'opening' : 'other';
    var fromTo = lastType + '->' + type;
    lastType = type;
    var padding = '';

    indent += transitions[fromTo];
    for (var j = 0; j < indent; j++) {
      padding += '  ';
    }
    if (fromTo == 'opening->closing')
      formatted = formatted.substr(0, formatted.length - 1) + ln + '\n'; // substr removes line break (\n) from prev loop
    else
      formatted += padding + ln + '\n';
  }

  return formatted;
}
