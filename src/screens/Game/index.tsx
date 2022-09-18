import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameParams } from "../../@types/navigation";
import { Background } from "../../components/Background";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";

export function Game() {
  const { params: routeParam } = useRoute();
  const { id, title, bannerUrl } = routeParam as GameParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View />
        </View>

        <Image
          source={{ uri: bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={title} subtitle="Conecte-se e comece a jogar!" />
      </SafeAreaView>
    </Background>
  );
}
