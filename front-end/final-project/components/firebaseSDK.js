import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDUAvKfB9iulnkfTM34DrgfYui8lQ7l5DI',
        authDomain: 'nomado-1.firebaseapp.com',
        databaseURL: 'https://nomado-1.firebaseio.com',
        projectId: 'nomado-1',
        storageBucket: 'nomado-1.appspot.com',
        messagingSenderId: '98674158881'
        // appId: "1:98674158881:web:8d5e04d79fb3c2a0c4a260",
        // measurementId: "G-DHL66QJW29"
      });
    }
  }

  state = {
    chatkey: ''
  };

  login = async (user, success_callback, failed_callback) => {
    console.log('logging in');
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        if (user) {
          success_callback(user.user.uid);
        }
      }, failed_callback);
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref(`messages/${this.state.chatkey}`);
  }

  addChatkey = chatkey => {
    this.state.chatkey = chatkey;
  };

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }

  createAccount = async (user, success, fail) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(
        addedUser => {
          if (addedUser) {
            success(addedUser.user.uid);
          }
        },
        fail
        // function() {
        //   console.log('created user successfully. User email:' + user.email);
        //   let userf = firebase.auth().currentUser;
        //   userf.updateProfile({ displayName: user.name }).then(
        //     function() {
        //       console.log(
        //         'Updated displayName successfully. name:' + user.name
        //       );
        //       alert(
        //         'User ' +
        //           user.email +
        //           ' was created successfully. Please login.'
        //       );
        //     },
        //     function(error) {
        //       console.warn('Error update displayName.');
        //     }
        //   );
        // },
        // function(error) {
        //   console.error(
        //     'got error:' + typeof error + ' string:' + error.message
        //   );
        //   alert('Create account failed. Error: ' + error.message);
        // }
      );
  };

  uploadImage = async uri => {
    console.log('got image to upload. uri:' + uri);
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref('avatar')
        .child(uuid.v4());
      const task = ref.put(blob);

      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          () => {},
          reject(() => resolve(task.snapshot.downloadURL))
        );
      });
    } catch (err) {
      console.log('uploadImage try/catch error: ' + err.message);
    }
  };

  updateAvatar = url => {
    let userf = firebase.auth().currentUser;
    if (userf != null) {
      userf.updateProfile({ avatar: url }).then(
        function() {
          console.log('Updated avatar successfully. url:' + url);
          alert('Avatar image is saved successfully.');
        },
        function(error) {
          console.warn('Error update avatar.');
          alert('Error update avatar. Error:' + error.message);
        }
      );
    } else {
      console.log("can't update avatar, user is not login.");
      alert('Unable to update avatar. You must login first.');
    }
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;
