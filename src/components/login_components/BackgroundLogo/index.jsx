import background from "../../../assets/images/registerImages/background.svg";
import { DivImages } from "./style";

export const BackgroundBody = (prop) => {
  return <DivImages background={background}>{prop.children}</DivImages>;
};
