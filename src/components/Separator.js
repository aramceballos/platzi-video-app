import React from 'react';
import { View } from 'react-native';

const Separator = ({ horizontal }) => {
  return (
    <View
      style={{ height: !horizontal && 15, marginHorizontal: horizontal && 5 }}
    />
  );
};

export default Separator;
