import h from './h';
import Graph from './graph';
import render from './render/canvas';
import createContext from './context';

export default class CanvasGraph {
  constructor(element, data, options = {}) {
    this.ctx = createContext(element);
    this.data = data;
    this.options = options;
    this.render();
    this.ctx.onClick = (e) => this.render(e);
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  setOptions(options) {
    this.options = { ...this.options, ...options };
    this.render();
  }

  render(e) {
    const { data, options } = this;
    render(<Graph data={data} {...options} />, this.ctx, e);
  }
}
