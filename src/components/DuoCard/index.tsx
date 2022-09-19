import { GameController } from "phosphor-react-native";
import { TouchableOpacity, View, Text } from "react-native";
import { THEME } from "../../theme";
import { DuoInfo } from "./DuoInfo";

import { styles } from "./styles";

export type DuoCardProps = {
  id: string;
  hourStart: string;
  hourEnd: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
};

type Props = {
  data: DuoCardProps;
  onConnect(): void;
};

export function DuoCard({
  data: {
    id,
    name,
    hourStart,
    hourEnd,
    weekDays,
    yearsPlaying,
    useVoiceChannel,
  },
  onConnect,
}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={name} />
      <DuoInfo
        label="Tempo de jogo"
        value={`${yearsPlaying} ano${yearsPlaying !== 1 ? "s" : ""}`}
      />
      <DuoInfo
        label="Disponibilidade"
        value={`${weekDays.length} dia${
          weekDays.length !== 1 ? "s" : ""
        } \u2022 ${hourStart} - ${hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={useVoiceChannel ? "Sim" : "Não"}
        colorValue={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20} color={THEME.COLORS.TEXT} />

        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
