import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export type GameCardProps = {
  id: string;
  title: string;
  _count: { ads: string };
  bannerUrl: ImageSourcePropType;
};

type Props = TouchableOpacityProps & {
  data: GameCardProps;
};

export function GameCard({
  data: { _count, title, bannerUrl },
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.ads}>{_count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
