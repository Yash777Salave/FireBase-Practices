import auth from '@react-native-firebase/auth';

const registerUser = async (email, password) => {
  try {
    // console.log('from auth file ------>');
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
const loginUser = async (email, password) => {
  try {
    console.log('from LoginUser Function ------>');
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    return { user, emailVerified: user.emailVerified }; // two items we return to calling function because we need to know there that is our email is verified or not so we need to check that is why er return 2 statemnts here
    // here bove we use user.emailVerified to know true or false so if i click to verified on email's message thn ti would be true
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password';
        break;
      case 'auth/user-not-found':
        errorMessage = 'User mot found';
        break;

      default:
        errorMessage = 'unknown error occured';
        break;
    }
    throw new Error(errorMessage);
  }
};
export { registerUser, loginUser };
