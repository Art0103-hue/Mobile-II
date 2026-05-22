import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
};

const dicas = [
  {
    id: 1,
    icone: 'water-outline',
    texto:
      'Recicláveis devem estar limpos e secos para evitar contaminação.',
  },
  {
    id: 2,
    icone: 'warning-outline',
    texto:
      'Vidro quebrado deve ser embalado e identificado para proteger os coletores.',
  },
  {
    id: 3,
    icone: 'trash-outline',
    texto:
      'Separe o lixo orgânico do reciclável. Restos de comida não vão na coleta seletiva.',
  },
  {
    id: 4,
    icone: 'recycle-outline',
    texto:
      'Plásticos com símbolo de reciclagem devem ser separados por tipo para melhor reaproveitamento.',
  },
];

export default function DicasColetaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dicas de coleta</Text>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Ionicons name="person" size={22} color={CORES.branco} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {dicas.map((dica) => (
          <View key={dica.id} style={styles.dicaCard}>
            <View style={styles.dicaIconContainer}>
              <Ionicons name={dica.icone} size={28} color={CORES.primaria} />
            </View>
            <Text style={styles.dicaTexto}>{dica.texto}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.amareloClaro,
  },
  header: {
    backgroundColor: CORES.primaria,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: CORES.branco,
  },
  userIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: CORES.amarelo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  dicaCard: {
    backgroundColor: CORES.amarelo,
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: CORES.primaria,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dicaIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: CORES.amareloClaro,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  dicaTexto: {
    flex: 1,
    fontSize: 14,
    color: CORES.primaria,
    lineHeight: 20,
  },
});
