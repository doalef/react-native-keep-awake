import { useEffect } from "react";
import { NativeModules } from "react-native";

export const activateKeepAwake = (): void => {
  NativeModules.KCKeepAwake.activate();
};

export const deactivateKeepAwake = (): void => {
  NativeModules.KCKeepAwake.deactivate();
};

export const useKeepAwake = (): void => {
  useEffect(() => {
    activateKeepAwake();
    return deactivateKeepAwake;
  }, []);
};

const KeepAwake = () => {
  useEffect(() => {
    activateKeepAwake();
    return deactivateKeepAwake;
  }, []);

  return null;
};

export default KeepAwake;