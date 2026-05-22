import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FiUser, FiDroplet, FiAlertTriangle, FiTrash2, FiRecycle } from 'react-icons/fi';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
};

const dicas = [
  {
    id: 1,
    IconComponent: FiDroplet,
    texto:
      'Recicláveis devem estar limpos e secos para evitar contaminação.',
  },
  {
    id: 2,
    IconComponent: FiAlertTriangle,
    texto:
      'Vidro quebrado deve ser embalado e identificado para proteger os coletores.',
  },
  {
    id: 3,
    IconComponent: FiTrash2,
    texto:
      'Separe o lixo orgânico do reciclável. Restos de comida não vão na coleta seletiva.',
  },
  {
    id: 4,
    IconComponent: FiRecycle,
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
          <FiUser size={20} color={CORES.branco} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {dicas.map((dica) => {
          const IconComp = dica.IconComponent;
          return (
            <View key={dica.id} style={styles.dicaCard}>
              <View style={styles.dicaIconContainer}>
                <IconComp size={24} color={CORES.primaria} />
              </View>
              <Text style={styles.dicaTexto}>{dica.texto}</Text>
            </View>
          );
        })}
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
