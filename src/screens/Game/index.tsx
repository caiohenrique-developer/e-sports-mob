import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameParams } from "../../@types/navigation";
import { Background } from "../../components/Background";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { useEffect, useState } from "react";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const navigation = useNavigation();
  const { params: routeParam } = useRoute();
  const { id: gameId, title, bannerUrl } = routeParam as GameParams;

  useEffect(() => {
    fetch(`http://192.168.1.95:3333/games/${gameId}/ads`)
      .then((res) => res.json())
      .then((data) => setDuos(data));
  }, []);

  const handleGoBack = () => navigation.goBack();

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

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => {}} />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyContentList,
          ]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
