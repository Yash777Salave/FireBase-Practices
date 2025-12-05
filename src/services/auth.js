import auth from '@react-native-firebase/auth';

const registerUser = async (email, password) => {
  try {
    console.log('from auth file ------>');
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await userCredential.user.sendEmailVerification();
    return userCredential.user;
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'An email already exist, please try new ';
        break;

      case 'auth/invalid-email':
        errorMessage = 'An invalid email ';
        break;

      case 'auth/invalid-password':
        errorMessage = 'Weak password, use 6 digit at least';
        break;

      default:
        errorMessage = 'An unknown error occured';
        break;
    }
    throw new Error(errorMessage);
  }
};
export default registerUser;
