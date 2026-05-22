import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { FiUser, FiSave } from 'react-icons/fi';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
};

export default function PerfilScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [tipoUso, setTipoUso] = useState('');

  const handleSalvar = () => {
    Alert.alert('Sucesso', 'Perfil salvo com sucesso!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Ícone de perfil */}
        <View style={styles.perfilIconContainer}>
          <View style={styles.perfilCircle}>
            <FiUser size={56} color={CORES.amarelo} />
          </View>
        </View>

        {/* Formulário */}
        <View style={styles.formCard}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            placeholderTextColor="#999"
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Tipo de uso:</Text>
          <View style={styles.tipoUsoContainer}>
            <TouchableOpacity
              style={[
                styles.tipoUsoButton,
                tipoUso === 'Empresa' && styles.tipoUsoButtonSelecionado,
              ]}
              onPress={() => setTipoUso('Empresa')}
            >
              <Text
                style={[
                  styles.tipoUsoText,
                  tipoUso === 'Empresa' && styles.tipoUsoTextSelecionado,
                ]}
              >
                Empresa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tipoUsoButton,
                tipoUso === 'Casa' && styles.tipoUsoButtonSelecionado,
              ]}
              onPress={() => setTipoUso('Casa')}
            >
              <Text
                style={[
                  styles.tipoUsoText,
                  tipoUso === 'Casa' && styles.tipoUsoTextSelecionado,
                ]}
              >
                Casa
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.salvarButton} onPress={handleSalvar}>
            <View style={styles.salvarButtonContent}>
              <FiSave size={20} color={CORES.amarelo} />
              <Text style={styles.salvarButtonText}>Salvar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.amareloClaro,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
  },
  perfilIconContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  perfilCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: CORES.primaria,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: CORES.amarelo,
  },
  formCard: {
    width: '100%',
    backgroundColor: CORES.amarelo,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1.5,
    borderColor: CORES.primaria,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CORES.primaria,
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    backgroundColor: CORES.amareloClaro,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: CORES.primaria,
    borderWidth: 1,
    borderColor: CORES.primaria,
  },
  tipoUsoContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  tipoUsoButton: {
    flex: 1,
    backgroundColor: CORES.amareloClaro,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: CORES.primaria,
  },
  tipoUsoButtonSelecionado: {
    backgroundColor: CORES.primaria,
  },
  tipoUsoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CORES.primaria,
  },
  tipoUsoTextSelecionado: {
    color: CORES.amarelo,
  },
  salvarButton: {
    backgroundColor: CORES.primaria,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 28,
  },
  salvarButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  salvarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.amarelo,
  },
});
