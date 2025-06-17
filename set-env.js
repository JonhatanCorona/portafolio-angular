const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = './src/environment'; // Ajusta la ruta si tu carpeta se llama distinto

// Verifica que el directorio exista, si no, lo crea
if (!existsSync(path)) {
  mkdirSync(path, { recursive: true });
  console.log(`Carpeta creada: ${path}`);
} else {
  console.log(`Carpeta ya existe: ${path}`);
}

// Aquí lee las variables de entorno
const {
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID
} = process.env;

// Muestra en consola las variables (puedes comentar estas líneas después)
console.log('LOGIN_EMAIL:', LOGIN_EMAIL);
console.log('LOGIN_PASSWORD:', LOGIN_PASSWORD ? '********' : 'No definido');
console.log('FIREBASE_API_KEY:', FIREBASE_API_KEY);
console.log('FIREBASE_AUTH_DOMAIN:', FIREBASE_AUTH_DOMAIN);
console.log('FIREBASE_PROJECT_ID:', FIREBASE_PROJECT_ID);
console.log('FIREBASE_STORAGE_BUCKET:', FIREBASE_STORAGE_BUCKET);
console.log('FIREBASE_MESSAGING_SENDER_ID:', FIREBASE_MESSAGING_SENDER_ID);
console.log('FIREBASE_APP_ID:', FIREBASE_APP_ID);

// Construye el contenido del archivo environment.ts
const envConfigFile = `
export const environment = {
  production: true,
  loginEmail: '${LOGIN_EMAIL || ''}',
  loginPassword: '${LOGIN_PASSWORD || ''}',
  firebaseConfig: {
    apiKey: '${FIREBASE_API_KEY || ''}',
    authDomain: '${FIREBASE_AUTH_DOMAIN || ''}',
    projectId: '${FIREBASE_PROJECT_ID || ''}',
    storageBucket: '${FIREBASE_STORAGE_BUCKET || ''}',
    messagingSenderId: '${FIREBASE_MESSAGING_SENDER_ID || ''}',
    appId: '${FIREBASE_APP_ID || ''}'
  }
};
`;

// Escribe el archivo
try {
  const targetPath = `${path}/environment.ts`;
  writeFileSync(targetPath, envConfigFile);
  console.log(`Archivo environment.ts generado correctamente en: ${targetPath}`);
} catch (error) {
  console.error('Error al escribir environment.ts:', error);
  process.exit(1); // Termina con error para que el build falle y sepas que algo pasó
}
