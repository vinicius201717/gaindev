import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBdcWv_K8okhX9NOlxKp1FvdUtjtqEVzYI',
  authDomain: 'gaindev-25d32.firebaseapp.com',
  projectId: 'gaindev-25d32',
  storageBucket: 'gaindev-25d32.appspot.com',
  messagingSenderId: '752393569397',
  appId: '1:752393569397:web:1fb6f017d52a10f2ee643c',
  measurementId: 'G-JGZY211HNH',
}

// Inicialize o aplicativo Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Função para salvar o número de telefone no Firebase Realtime Database
export const salvarNumeroTelefone = (telefone: string) => {
  const db = getDatabase(firebaseApp)
  const telefonesRef = ref(db, 'telefones') // 'telefones' é o nome da coleção

  // Adiciona o número de telefone à coleção
  push(telefonesRef, telefone)
}

// Exemplo de uso
const numeroTelefone = '123456789' // Substitua pelo número que você deseja armazenar
salvarNumeroTelefone(numeroTelefone)
