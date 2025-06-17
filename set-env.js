const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = './src/environment'; 


if (!existsSync(path)) {
  mkdirSync(path, { recursive: true });

} else {

}


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

try {
  const targetPath = `${path}/environment.ts`;
  writeFileSync(targetPath, envConfigFile);
} catch (error) {
  console.error('Error al escribir environment.ts:', error);
  process.exit(1); 
}
