import h from './h';
import Graph from './graph';
import render from './render/svg';

export default class SVGGraph {
  constructor(element, data, options = {}) {
    this.dom = typeof element === 'string' ? document.querySelector(element) : element;
    this.data = data;
    this.options = options;
    this.render();
  }
  setData(data) {
    this.data = data;
    this.render();
  }
  setOptions(options) {
    this.options = { ...this.options, ...options };
    this.render();
  }
  render() {
    const { data, options } = this;
    if (this.tree) {
      this.dom.removeChild(this.tree);
    }
    this.tree = render(<Graph data={data} {...options} />);
    this.dom.appendChild(this.tree);
  }
}
