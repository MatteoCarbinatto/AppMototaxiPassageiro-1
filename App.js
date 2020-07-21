import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import T01_Abertura from './src/pages/T01_Abertura';
import T02_Login from './src/pages/T02_Login';
import T03_CriaConta from './src/pages/T03_CriaConta';
import T04_Celular from './src/pages/T04_Celular';
import T05_ValidaCelular from './src/pages/T05_ValidaCelular';
import T06_BoasVindas from './src/pages/T06_BoasVindas';
import T07_RecuperaSenha from './src/pages/T07_RecuperaSenha';
import T08_EnviaLinkRecuperacao from './src/pages/T08_EnviaLinkRecuperacao';
import T09_Inicio from './src/pages/T09_Inicio';
import T10_OpcaoViagem from './src/pages/T10_OpcaoViagem';
import T11_TrechoViagem from './src/pages/T11_TrechoViagem';
import T12_ValorViagem from './src/pages/T12_ValorViagem';
import T13_Troco from './src/pages/T13_Troco';
import T14_ValorTroco from './src/pages/T14_ValorTroco';
import T15_ConfirmacaoLocal from './src/pages/T15_ConfirmacaoLocal';
import T17_BuscarMotorista from './src/pages/T17_BuscarMotorista';
import T18_ACaminho from './src/pages/T18_ACaminho';
import T19_RealizandoViagem from './src/pages/T19_RealizandoViagem';
import T20_FinalizacaoViagem from './src/pages/T20_FinalizacaoViagem';
import T21_Comentario from './src/pages/T21_Comentario';
import T22_Menu from './src/pages/T22_Menu';
import T23_HistoricoViagem from './src/pages/T23_HistoricoViagem';
import T24_Ajuda from './src/pages/T24_Ajuda';
import T25_Configuracoes from './src/pages/T25_Configuracoes';
import T26_PerfilMotorista from './src/pages/T26_PerfilMotorista'
import T29_ViagemRealizada from './src/pages/T29_ViagemRealizada';
import T30_Atendimento from './src/pages/T30_Atendimento';
import T31_TermosdeUso from './src/pages/T31_TermosdeUso';
import T32_Privacidade from './src/pages/T32_Privacidade';
import T33_AlterarSenha from './src/pages/T33_AlterarSenha';
import T34_AlterarCelular from './src/pages/T34_AlterarCelular';
import T35_AlterarEmail from './src/pages/T35_AlterarEmail';
import T38_ConfimacaoSMS from './src/pages/T38_ConfimacaoSMS';
import T39_ConfirmaNovoEmail from './src/pages/T39_ConfirmaNovoEmail';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
        <Stack.Screen name="T01_Abertura" component={T01_Abertura} />
        <Stack.Screen name="T02_Login" component={T02_Login} />
        <Stack.Screen name="T03_CriaConta" component={T03_CriaConta} />
        <Stack.Screen name="T04_Celular" component={T04_Celular} />
        <Stack.Screen name="T05_ValidaCelular" component={T05_ValidaCelular} />
        <Stack.Screen name="T06_BoasVindas" component={T06_BoasVindas} />
        <Stack.Screen name="T07_RecuperaSenha" component={T07_RecuperaSenha}/> 
        <Stack.Screen name="T08_EnviaLinkRecuperacao" component={T08_EnviaLinkRecuperacao} />
        <Stack.Screen name="T09_Inicio" component={T09_Inicio} />
        <Stack.Screen name="T10_OpcaoViagem" component={T10_OpcaoViagem} />
        <Stack.Screen name="T11_TrechoViagem" component={T11_TrechoViagem} />
        <Stack.Screen name="T12_ValorViagem" component={T12_ValorViagem}/>
        <Stack.Screen name="T13_Troco" component={T13_Troco}/>
        <Stack.Screen name="T14_ValorTroco" component={T14_ValorTroco}/>
        <Stack.Screen name="T15_ConfirmacaoLocal" component={T15_ConfirmacaoLocal}/>
        <Stack.Screen name="T17_BuscarMotorista" component={T17_BuscarMotorista} />
        <Stack.Screen name="T18_ACaminho" component={T18_ACaminho} />
        <Stack.Screen name="T19_RealizandoViagem" component={T19_RealizandoViagem} />
        <Stack.Screen name="T20_FinalizacaoViagem" component={T20_FinalizacaoViagem}/>
        <Stack.Screen name="T21_Comentario" component={T21_Comentario}/>
        <Stack.Screen name="T22_Menu" component={T22_Menu} />
        <Stack.Screen name="T23_HistoricoViagem" component={T23_HistoricoViagem} />
        <Stack.Screen name="T24_Ajuda" component={T24_Ajuda} />
        <Stack.Screen name="T25_Configuracoes" component={T25_Configuracoes} />
        <Stack.Screen name="T26_PerfilMotorista" component={T26_PerfilMotorista}/>
        <Stack.Screen name="T29_ViagemRealizada" component={T29_ViagemRealizada} />
        <Stack.Screen name="T30_Atendimento" component={T30_Atendimento} />
        <Stack.Screen name="T31_TermosdeUso" component={T31_TermosdeUso} />
        <Stack.Screen name="T32_Privacidade" component={T32_Privacidade} />
        <Stack.Screen name="T33_AlterarSenha" component={T33_AlterarSenha} />
        <Stack.Screen name="T34_AlterarCelular" component={T34_AlterarCelular}/>
        <Stack.Screen name="T35_AlterarEmail" component={T35_AlterarEmail}/>
        <Stack.Screen name="T38_ConfimacaoSMS" component={T38_ConfimacaoSMS}/>
        <Stack.Screen name="T39_ConfirmaNovoEmail" component={T39_ConfirmaNovoEmail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;