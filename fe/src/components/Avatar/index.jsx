import React from 'react';
import { Avatar } from 'antd';
import _ from 'lodash';

// export type AvatarCpnProps = {
//   src?: string;
//   fullName?: string;
//   vip?: boolean;
// } & AvatarProps;

const AvatarCpn = (props) => {
  const { src = '', fullName = '', size = 50, vip = false, ...otherProps } = props;
  const fontSize = Number(size) / 3;
  return (
    <div>
      <div className={`cpp-avatar ${vip ? 'cpp-avatar--vip' : ''}`}>
        {_.isEmpty(src) ? (
          <Avatar {...otherProps} size={size} className="cpp-avatar__image">
            <div style={{ fontSize: fontSize }}>{fullName.slice(0, 2).toUpperCase()}</div>
          </Avatar>
        ) : (
          <Avatar {...otherProps} size={size} className="cpp-avatar__image" src={src} />
        )}
      </div>
    </div>
  );
};

export default AvatarCpn;
