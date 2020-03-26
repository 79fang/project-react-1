import _ from 'lodash';
import j from 'jquery'
import foo from './foo'

function component() {
  // let element = document.createElement('div');
  let element = j('<div></div>')

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.html(_.join(['Hello', 'webpack2'], ''))

  // return element;
  return element.get(0);
}

document.body.appendChild(component());

console.log(foo)
console.log(foo())
