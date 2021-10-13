import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuIcon = props => {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg height="20" width="20" viewBox="0 0 29.96 122.88">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M15 0A15 15 0 110 15 15 15 0 0115 0zm0 92.93a15 15 0 11-15 15 15 15 0 0115-15zm0-46.47a15 15 0 11-15 15 15 15 0 0115-15z"
      />
    </Svg>
  );
};

export default MenuIcon;
