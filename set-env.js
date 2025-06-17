const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = './src/environments';

if (!existsSync(path)) {
  mkdirSync(path, { recursive: true });
}

const targetPath = `${path}/environment.ts`;
console.log('FIREBASE_API_KEY:', process.env.FIREBASE_API_KEY);
console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID);
console.log('FIREBASE_APP_ID:', process.env.FIREBASE_APP_ID);
const envConfigFile = `
export const environment = {
  production: true,
  loginEmail: '${process.env.LOGIN_EMAIL}',
  loginPassword: '${process.env.LOGIN_PASSWORD}',
  firebaseConfig : {
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
