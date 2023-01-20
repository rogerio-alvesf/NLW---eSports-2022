import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  Text,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { THEME } from "../../theme";

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: TexImageSource;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

const GameCard = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover}>
      <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.ads}>
          {data.ads} {Number(data.ads) > 1 ? "anúncios" : "anúncio"}
        </Text>
      </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GameCard;
