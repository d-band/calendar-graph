import h from './h';
import Graph from './graph';
import render from './render/string';

export default class StrGraph {
  constructor(data, options = {}) {
    this.data = data;
    this.options = options;
  }
  setData(data) {
    this.data = data;
  }
  setOptions(options) {
    this.options = { ...this.options, ...options };
  }
  render() {
    const { data, options } = this;
    return render(<Graph data={data} {...options} />);
  }
}
