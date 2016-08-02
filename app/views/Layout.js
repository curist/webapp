import m from 'mithril';

import { BindData } from 'app/db';

function UserStatus(user) {
  if(user) {
    return m('p', 'signed in');
  } else {
    return m('p', 'not login');
  }
}

function Layout(component) {
  return {
    oninit () {
      const ctrl = this;

      BindData(ctrl , {
        user: ['user']
      });
    },
    view (vnode) {
      const ctrl = this;
      const user = ctrl.data.user;
      return m('div', [
        UserStatus(user),
        m(component),
      ]);
    }
  };
}

export default Layout;
