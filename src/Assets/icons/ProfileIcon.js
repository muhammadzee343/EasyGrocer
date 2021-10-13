import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = props => {
  return (
    <Svg height="30" width="30" viewBox="0 0 500 500">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M250 291.6c-52.8 0-95.8-43-95.8-95.8s43-95.8 95.8-95.8 95.8 43 95.8 95.8-43 95.8-95.8 95.8zm0-164.3c-37.7 0-68.4 30.7-68.4 68.4s30.7 68.4 68.4 68.4 68.4-30.7 68.4-68.4-30.7-68.4-68.4-68.4z"
      />
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M386.9 401.1h-27.4c0-60.4-49.1-109.5-109.5-109.5s-109.5 49.1-109.5 109.5h-27.4c0-75.5 61.4-136.9 136.9-136.9s136.9 61.4 136.9 136.9z"
      />
    </Svg>
  );
};

export default ProfileIcon;
