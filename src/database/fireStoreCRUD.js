import firestore from '@react-native-firebase/firestore';

export const addUserData = async userData => {
  try {
    await firestore().collection('users').add(userData);
    console.log('user Data is added successfully');
  } catch (error) {
    console.log('Error adding Data ----> ', error);
  }
};

export const getUsers = async () => {
  try {
    const usersSnapshot = await firestore().collection('users').get(); // here we get all users like snapshot so need to retrieve them 1 by 1
    const users = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })); // here we need to use map to retrieve data from docs becoz everything here is docs

    console.log('data is retrieved ---> ', users);
    return users;
  } catch (error) {
    console.log('getting error while fetching data ----> ', error.message);
  }
};

export const updateUser = async (id, updateData) => {
  try {
    await firestore().collection('users').doc(id).update(updateData);
    console.log('data updated successfully');
  } catch (error) {
    console.log('error while updating data');
  }
};

export const deleteUserData = async id => {
  await firestore().collection('users').doc(id).delete();
};
