import _ from 'underscore';
import m from 'mithril';
import Baobab from 'baobab';
const db = new Baobab({
  key: 'value',
  count: 0,
  clickers: [],
  state: {
    user: 'anonymous'
  }
});

export default db;

export function BindData(controller, bindings) {
  controller.data = {};

  // get initial props value
  Object.keys(bindings).forEach(propName => {
    const path = bindings[propName];
    const v = db.get(path);
    controller.data[propName] = v;
  });

  let watcher = controller._w = db.watch(bindings);
  let callback = _.debounce((e) => {
    m.startComputation();
    const data = e.target.get();
    controller.data = data;
    m.endComputation();
  }, 20);
  watcher.on('update', callback);
  // register onunload after inited component
  // so we can avoid override existing onunload callback
  requestAnimationFrame(() => {
    controller.onunload = (function (origOnunload) {
      origOnunload = (origOnunload || function(){}).bind(controller);
      return () => {
        watcher.off('update');
        origOnunload();
      };
    })(controller.onunload);
  });
}
