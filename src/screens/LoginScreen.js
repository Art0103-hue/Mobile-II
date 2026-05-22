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
} from 'react-native';
import { FiRecycle } from 'react-icons/fi';

const CORES = {
  primaria: '#004D40',
  amarelo: '#FFD54F',
  amareloClaro: '#FFF9C4',
  branco: '#FFFFFF',
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Navegar para as tabs principais após login
    navigation.navigate('MainTabs');
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
            <FiRecycle size={48} color={CORES.primaria} />
          </View>
        </View>

        {/* Formulário de Login */}
        <View style={styles.formContainer}>
          <View style={styles.formInner}>
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

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.criarContaLink}
              onPress={() => navigation.navigate('CriarConta')}
            >
              <Text style={styles.criarContaText}>
                Não tem conta? Criar Conta
              </Text>
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
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: CORES.amarelo,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: CORES.primaria,
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
  loginButton: {
    backgroundColor: CORES.amarelo,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    borderWidth: 2,
    borderColor: CORES.primaria,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.primaria,
  },
  criarContaLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  criarContaText: {
    fontSize: 13,
    color: CORES.primaria,
    textDecorationLine: 'underline',
  },
});
