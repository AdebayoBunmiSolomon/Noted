import React, {
  FunctionComponent,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Text, SafeAreaView, View } from "react-native";
import { toastMsgStyle } from "./style/ComponentStyle";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

interface ToastMessageProps {
  type: string;
  text: string;
  description: string;
  timeout?: number;
  ref: any;
}

const ToastMessage: FunctionComponent<ToastMessageProps> = forwardRef(
  ({ type, text, description, timeout = 1500 }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const showToast = () => {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        clearTimeout(timer);
      }, timeout);
    };

    useImperativeHandle(ref, () => ({
      show: showToast,
    }));

    const TOAST_TYPE = {
      success: {
        backgroundColor: "#2ecc71",
        icon: "check-circle",
      },
      danger: {
        backgroundColor: "#e74c3c",
        icon: "exclamation-circle",
      },
      info: {
        backgroundColor: "#3498db",
        icon: "info-circle",
      },
      warning: {
        backgroundColor: "#f39c12",
        icon: "exclamation-triangle",
      },
    };

    const backGroundColor =
      TOAST_TYPE[type as keyof typeof TOAST_TYPE].backgroundColor;
    const icon = TOAST_TYPE[type as keyof typeof TOAST_TYPE].icon;

    return (
      <>
        {isVisible && (
          <SafeAreaView style={toastMsgStyle.safeAreaContainer}>
            <Animated.View
              style={[
                toastMsgStyle.container,
                { backgroundColor: backGroundColor },
              ]}
              entering={FadeInUp.delay(200)}
              exiting={FadeOutUp}>
              <FontAwesome5 name={icon} size={40} color={"#FFF"} />
              <View style={toastMsgStyle.toastView}>
                <Text style={toastMsgStyle.text}>{text}</Text>
                <Text style={toastMsgStyle.description}>{description}</Text>
              </View>
            </Animated.View>
          </SafeAreaView>
        )}
      </>
    );
  }
);

export default ToastMessage;
