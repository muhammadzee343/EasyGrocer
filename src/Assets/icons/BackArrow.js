import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrowIcon = props => {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg height="16" width="16" viewBox="0 0 66.91 122.88">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M64.96 111.2a6.884 6.884 0 01-.13 9.73 6.875 6.875 0 01-9.73-.14L1.97 66.01l4.93-4.8-4.95 4.8a6.902 6.902 0 01.15-9.76c.08-.08.16-.15.24-.22L55.1 2.09c2.65-2.73 7-2.79 9.73-.14 2.73 2.65 2.78 7.01.13 9.73L16.5 61.23l48.46 49.97z"
      />
    </Svg>
  );
};

export default BackArrowIcon;
