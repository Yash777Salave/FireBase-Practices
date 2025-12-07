import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  getUsers,
  addUserData,
  deleteUserData,
  updateUser,
} from '../database/fireStoreCRUD';

const userCRUD = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [users, setUsers] = useState([]);
  const [editID, setEditID] = useState(null);

  const fetchUsers = async () => {
    try {
      const userList = await getUsers();
      console.log('all user list is here @@@@@@@@@@ ', userList);
      setUsers(userList);
    } catch (error) {
      console.log('Error fetching--------------->  ', error);
    }
  };
  useEffect(() => {
    fetchUsers();
    console.log('All users are here -----------> ### ', users);
  }, []);

  const handleSubmit = async () => {
    try {
      if (!email || !name || !phoneNumber) {
        Alert.alert('Error!', 'Fill all the Data');
        return;
      }
    } catch (error) {
      console.log('Error ---> ', error.message);
    }
    const userData = { email, name, phoneNumber };
    try {
      if (editID) {
        await updateUser(editID, userData);
      } else {
        await addUserData(userData);
        Alert.alert('User Added Successfully !');
      }
      setName('');
      setEmail('');
      setPhoneNumber('');
      setEditID(null);
      fetchUsers();
    } catch (error) {
      console.log('error ', error.message);
    }
  };
  const handleDelete = async id => {
    try {
      await deleteUserData(id);
      fetchUsers();
      Alert.alert('user Deleted Successfully');
    } catch (error) {
      console.log('error ', error.message);
    }
  };
  const handleEdit = async user => {
    console.log('user is here ++++++++ ', user);
    setName(user.name);
    setEditID(user.editID);
    console.log('EditId is here ))))))))))))))) ', editID);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userAddContainer}>
        <Text style={styles.headingText}>Add User</Text>
        <TextInput
          placeholder="Enter Name"
          style={styles.inputBox}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter Email"
          style={styles.inputBox}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Enter phone number"
          style={styles.inputBox}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {editID ? 'Edit User' : 'Add User'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#ffff',
              padding: 15,
              marginTop: 10,
              borderRadius: 20,
              width: '97%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          >
            <View>
              <Text style={{ fontSize: 19 }}>Name : {item.name}</Text>
              <Text style={{ fontSize: 19 }}>Email : {item.email}</Text>
              <Text style={{ fontSize: 19 }}>Phone : {item.phoneNumber}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                  marginRight: 10,
                }}
                onPress={() => {
                  handleEdit(item);
                }}
              >
                <Text style={styles.editDeleteButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                  marginRight: 10,
                }}
                onPress={() => {
                  handleDelete(item.id);
                }}
              >
                <Text style={styles.editDeleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text>No user Found </Text>}
      />
    </View>
  );
};

export default userCRUD;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAddContainer: {
    backgroundColor: '#ffff',
    padding: 10,
    width: '88%',
    borderRadius: 10,
  },
  headingText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  inputBox: {
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 13,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    padding: 8,
    backgroundColor: 'purple',
    borderRadius: 10,
    marginTop: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  editDeleteButtonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#ffff',
  },
});
