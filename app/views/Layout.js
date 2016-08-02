import m from 'mithril';

import { BindData } from 'app/db';

function UserStatus(user) {
  if(user) {
    return m('p', 'signed in');
  } else {
    return m('p', 'not login');
  }
}

const Layout = {
  controller () {
    const ctrl = this;

    BindData(ctrl , {
      user: ['user']
    });
  },
  view (ctrl, args) {
    const { component } = args;
    const user = ctrl.data.user;
    return m('div', [
      UserStatus(user),
      m(component),
    ]);
  }
};

export default Layout;
