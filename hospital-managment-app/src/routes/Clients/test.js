import { getPatientByCode } from '../../Web3';


const testGetPatientByCode = async () => {
    try {
      const patientCode = 'CODE_DU_PATIENT'; // Remplacez 'CODE_DU_PATIENT' par le code du patient que vous souhaitez récupérer
      const patient = await getPatientByCode(patientCode);
      console.log('Patient Details:');
      console.log('Code:', patient.code);
      console.log('Name:', patient.name);
      console.log('Temperature:', patient.temperature);
      console.log('Hash List:', patient.hashList);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Appelez la fonction de test
  testGetPatientByCode();