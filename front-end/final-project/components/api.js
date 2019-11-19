import axios from 'axios';
// install axios

//get user profile loaded from backend

export const getUserData = uuid => {
  return axios.get(`api/user/${uuid}`).then(({ data }) => {
    return data;
  });
};

//add new user profile with newUserObject in set format. input should include uuid from firebase.

export const addNewUser = newUserObject => {
  return axios.post(`api/user`, newUserObject).then(({ data }) => {
    return data;
  });
};

//main patch request to drive user agenda

export const updateAgenda = (uuid, agendaPoint) => {
  return axios.patch(`api/user/${uuid}`, agendaPoint).then(({ data }) => {
    return data;
  });
};
