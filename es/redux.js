import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { defaultSizes } from './defaults';
export var SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT';
export var setMobileDetect = function setMobileDetect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      phone = _ref.phone,
      tablet = _ref.tablet,
      mobile = _ref.mobile,
      desktop = _ref.desktop;

  return {
    type: SET_MOBILE_DETECT,
    phone: phone,
    tablet: tablet,
    mobile: mobile,
    desktop: desktop
  };
};
export var defaultSize = defaultSizes.desktop;
export var initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: false,
  fakeWidth: defaultSize
};
export var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_MOBILE_DETECT:
      {
        var _initialState$action = _objectSpread({}, initialState, action),
            mobile = _initialState$action.mobile,
            tablet = _initialState$action.tablet,
            phone = _initialState$action.phone,
            desktop = _initialState$action.desktop;

        var fakeWidth;

        if (mobile) {
          if (phone) {
            fakeWidth = defaultSizes.phone;
          } else if (tablet) {
            fakeWidth = defaultSizes.tablet;
          } else {
            fakeWidth = defaultSizes.phone;
          }
        } else if (desktop) {
          fakeWidth = defaultSizes.desktop;
        } else {
          fakeWidth = defaultSize;
        }

        return _objectSpread({}, state, {
          mobile: mobile,
          tablet: tablet,
          phone: phone,
          desktop: desktop,
          fakeWidth: fakeWidth
        });
      }

    default:
      return state;
  }
};
//# sourceMappingURL=redux.js.map