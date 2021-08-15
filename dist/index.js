'use strict';

var React = require('react');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SimpleRouterManager = props => {
  return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, props.router.map((route, index) => /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
    key: index,
    path: route.path,
    exact: route.exact,
    component: route.component
  })));
};

module.exports = SimpleRouterManager;
