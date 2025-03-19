import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicial from "./screens/TelaInicial";
import TelaPacientes from "./screens/TelaPacientes";
import GerenciarPacientes from "./screens/GerenciarPacientes";
import CadastrarPaciente from "./screens/CadastrarPaciente";
import TelaTratamentos from "./screens/TelaTratamentos";
import GerenciarTratamentos from "./screens/GerenciarTratamentos";
import CadastrarTratamento from "./screens/CadastrarTratamento";


const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TelaInicial">
    <Stack.Screen name="TelaInicial" component={TelaInicial} />
    <Stack.Screen name="TelaPacientes" component={TelaPacientes} />
    <Stack.Screen name="GerenciarPacientes" component={GerenciarPacientes} />
    <Stack.Screen name="CadastrarPaciente" component={CadastrarPaciente} />
    <Stack.Screen name="TelaTratamentos" component={TelaTratamentos} />
    <Stack.Screen name="GerenciarTratamentos" component={GerenciarTratamentos} />
    <Stack.Screen name="CadastrarTratamento" component={CadastrarTratamento} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
