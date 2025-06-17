const { writeFileSync } = require('fs');

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
  production: true,
  loginEmail: '${process.env.LOGIN_EMAIL}',
  loginPassword: '${process.env.LOGIN_PASSWORD}',
  firebaseConfig: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}'
  }
};
`;

writeFileSync(targetPath, envConfigFile);

console.log(`Archivo environment.ts generado correctamente en ${targetPath}`);
