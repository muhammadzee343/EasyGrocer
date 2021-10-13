import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CartIcon = props => {
  return (
    <Svg height="25" width="25" viewBox="0 0 48 48">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M45 17H16a1 1 0 00-1 1l2 15a1 1 0 001 1h23a1 1 0 001-1l4-15a1 1 0 00-1-1z"
      />
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M17 40a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 110 2zm24.952-12.762l.019.004 4-16-.019-.004c.02-.078.048-.154.048-.238a1 1 0 00-1-1H11.629L9.989 2.854l-.018.003A.988.988 0 009 2H3a1 1 0 100 2h5.137l4.874 33.146.019-.003A.986.986 0 0014 38h28a1 1 0 100-2H14.863l-.588-4H41a.986.986 0 00.952-.762zM14 30c-.006 0-.012.004-.018.004L11.922 16h31.797l-1 4H19a1 1 0 100 2h23.219l-.5 2H26a1 1 0 100 2h15.219l-1 4H14zm24 10a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 110 2z"
      />
    </Svg>
  );
};

export default CartIcon;
