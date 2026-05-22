import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FiUser, FiMapPin, FiChevronRight } from 'react-icons/fi';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
};

const locaisColeta = [
  {
    id: 1,
    nome: 'Supermercados Nova Era',
    endereco: 'Torquato Tapajós e Novo Aleixo',
  },
  {
    id: 2,
    nome: 'Supermercado Assaí',
    endereco: 'Av. Torquato Tapajós',
  },
  {
    id: 3,
    nome: 'Pátio Gourmet',
    endereco: 'Adrianópolis e Avenida',
  },
  {
    id: 4,
    nome: 'PEV Lagoa do Japiim',
    endereco: 'Av. Rodrigo Otávio',
  },
];

export default function LocaisColetaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Locais de coleta</Text>
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
        {locaisColeta.map((local) => (
          <TouchableOpacity key={local.id} style={styles.localCard}>
            <View style={styles.localIconContainer}>
              <FiMapPin size={20} color={CORES.primaria} />
            </View>
            <View style={styles.localInfo}>
              <Text style={styles.localNome}>{local.nome}</Text>
              <Text style={styles.localEndereco}>{local.endereco}</Text>
            </View>
            <FiChevronRight size={18} color={CORES.primaria} />
          </TouchableOpacity>
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
  localCard: {
    backgroundColor: CORES.amarelo,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: CORES.primaria,
  },
  localIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: CORES.amareloClaro,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  localInfo: {
    flex: 1,
  },
  localNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.primaria,
    marginBottom: 2,
  },
  localEndereco: {
    fontSize: 13,
    color: CORES.primaria,
    opacity: 0.7,
  },
});
