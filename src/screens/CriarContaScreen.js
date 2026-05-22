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
import { FiRecycle, FiHome } from 'react-icons/fi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
  preto: '#000000',
};

export default function CriarContaScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState('');

  const handleCriarConta = async () => {
    if (!nome.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o nome.');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o email.');
      return;
    }
    if (!senha.trim()) {
      Alert.alert('Erro', 'Por favor, preencha a senha.');
      return;
    }
    if (!idade.trim()) {
      Alert.alert('Erro', 'Por favor, preencha a idade.');
      return;
    }

    try {
      const usuario = {
        nome: nome.trim(),
        email: email.trim(),
        senha: senha,
        idade: idade.trim(),
        tipoUso: '',
      };
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
      await AsyncStorage.setItem('logado', 'true');
      Alert.alert('Sucesso', 'Conta criada com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('MainTabs') },
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar a conta.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Ícone do app */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <View style={styles.housesRow}>
              <FiHome size={28} color={CORES.primaria} />
              <FiHome size={28} color={CORES.primaria} />
              <FiHome size={28} color={CORES.primaria} />
            </View>
            <View style={styles.recycleRow}>
              <FiRecycle size={32} color={CORES.primaria} />
            </View>
          </View>
        </View>

        {/* Formulário de Registro */}
        <View style={styles.formContainer}>
          <View style={styles.formInner}>
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

            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
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

            <TouchableOpacity style={styles.criarButton} onPress={handleCriarConta}>
              <Text style={styles.criarButtonText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  iconContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: CORES.amarelo,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: CORES.primaria,
  },
  housesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  recycleRow: {
    alignItems: 'center',
  },
  formContainer: {
    width: '85%',
    backgroundColor: CORES.primaria,
    borderRadius: 16,
    padding: 20,
  },
  formInner: {
    backgroundColor: CORES.amarelo,
    borderRadius: 12,
    padding: 20,
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
  criarButton: {
    backgroundColor: CORES.amarelo,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    borderWidth: 2,
    borderColor: CORES.primaria,
  },
  criarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.primaria,
  },
});
