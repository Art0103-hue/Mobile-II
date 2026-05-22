import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FiUser } from 'react-icons/fi';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
};

const dicas = [
  {
    id: 1,
    texto:
      'Recicláveis devem estar limpos e secos para evitar contaminação.',
  },
  {
    id: 2,
    texto:
      'Vidro quebrado deve ser embalado e identificado para proteger os coletores.',
  },
  {
    id: 3,
    texto:
      'Separar o lixo em recicláveis e não recicláveis já ajuda bastante.',
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
          <FiUser size={20} color={CORES.branco} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {dicas.map((dica) => (
          <View key={dica.id} style={styles.dicaCard}>
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
    backgroundColor: CORES.amarelo,
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
    backgroundColor: CORES.branco,
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
  },
  dicaTexto: {
    fontSize: 14,
    color: CORES.primaria,
    lineHeight: 20,
  },
});
