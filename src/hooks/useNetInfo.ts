import React from 'react';
import { NetInfo } from 'react-native';

export const useNetInfo = () => {
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    const listener = (result: boolean) => {
      setIsConnected(result);
    };

    NetInfo.isConnected.addEventListener('connectionChange', listener);

    return () => {
      NetInfo.isConnected.removeEventListener('connectionChange', listener);
    };
  });

  return isConnected;
};
