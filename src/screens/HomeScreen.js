import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FiClock, FiHome, FiTrash2 } from 'react-icons/fi';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
  amareloMostarda: '#F9A825',
};

const diasSemana = [
  { nome: 'Segunda', tipo: 'Orgânico' },
  { nome: 'Terça', tipo: 'Reciclável' },
  { nome: 'Quarta', tipo: 'Orgânico' },
  { nome: 'Quinta', tipo: 'Reciclável' },
  { nome: 'Sexta', tipo: 'Orgânico' },
  { nome: 'Sábado', tipo: 'Reciclável' },
];

export default function HomeScreen({ navigation }) {
  const [diaSelecionado, setDiaSelecionado] = useState('Quinta');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Olá Usuário</Text>
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
        {/* Ponto de coleta mais próximo */}
        <View style={styles.coletaProxima}>
          <Text style={styles.coletaProximaTitle}>
            Ponto de coleta mais Próximo
          </Text>
          <View style={styles.coletaInfo}>
            <Ionicons name="location" size={18} color={CORES.primaria} />
            <Text style={styles.coletaEndereco}>
              Empório DB, Av. Mário Ypiranga Monteiro
            </Text>
          </View>
        </View>

        {/* Grid de dias da semana */}
        <Text style={styles.sectionTitle}>Tipo de coleta do dia</Text>
        <View style={styles.diasGrid}>
          {diasSemana.map((dia) => (
            <TouchableOpacity
              key={dia.nome}
              style={[
                styles.diaCard,
                diaSelecionado === dia.nome && styles.diaCardSelecionado,
              ]}
              onPress={() => setDiaSelecionado(dia.nome)}
            >
              <Text
                style={[
                  styles.diaNome,
                  diaSelecionado === dia.nome && styles.diaNomeSelecionado,
                ]}
              >
                {dia.nome}
              </Text>
              <Text
                style={[
                  styles.diaTipo,
                  diaSelecionado === dia.nome && styles.diaTipoSelecionado,
                ]}
              >
                {dia.tipo}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
  coletaProxima: {
    backgroundColor: CORES.amarelo,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: CORES.primaria,
  },
  coletaProximaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.primaria,
    marginBottom: 8,
    textAlign: 'center',
  },
  coletaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  coletaEndereco: {
    fontSize: 13,
    color: CORES.primaria,
    flexShrink: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORES.primaria,
    marginBottom: 12,
  },
  diasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  diaCard: {
    width: '47%',
    backgroundColor: CORES.amarelo,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: CORES.primaria,
  },
  diaCardSelecionado: {
    backgroundColor: CORES.primaria,
    borderColor: CORES.primaria,
  },
  diaNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CORES.primaria,
    marginBottom: 4,
  },
  diaNomeSelecionado: {
    color: CORES.branco,
  },
  diaTipo: {
    fontSize: 12,
    color: CORES.primaria,
  },
  diaTipoSelecionado: {
    color: CORES.amarelo,
  },
});
