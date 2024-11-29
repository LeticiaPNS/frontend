
import { AppRegistry } from "react-native"; // Usado para registrar o aplicativo
import App from "../../App.js"; // Caminho para o seu App.js
import { name as appName } from "../../app.json"; // Nome do aplicativo para registro

AppRegistry.registerComponent(appName, () => App); // Registro do app para rodar no dispositivo ou web
