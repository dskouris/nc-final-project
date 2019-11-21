import axios from 'axios';
// install axios

//get user profile loaded from backend

export const getUserData = uuid => {
  return axios
    .get(`https://be-nc-final-project-nomado.herokuapp.com/api/users/${uuid}`)
    .then(({ data }) => {
      return data;
    });
};

//add new user profile with newUserObject in set format. input should include uuid from firebase.

export const addNewUser = newUserObject => {
  return axios
    .post(
      `https://be-nc-final-project-nomado.herokuapp.com/api/users`,
      newUserObject
    )
    .then(({ data }) => {
      return data;
    });
};

//main patch request to drive user agenda

export const updateAgenda = (uuid, agendaPoint) => {
  return axios
    .patch(
      `https://be-nc-final-project-nomado.herokuapp.com/api/users/${uuid}`,
      agendaPoint
    )
    .then(({ data }) => {
      return data;
    });
};

export const removeFromAgenda = (uuid, locationIDObj) => {
  return axios
    .delete(
      `https://be-nc-final-project-nomado.herokuapp.com/api/users/${uuid}`,
      locationIDObj
    )
    .then(({ data }) => {
      return data;
    });
};

export const getPersonality = wordpool => {
  return axios
    .post('https://wandr-ai-server.herokuapp.com/api/personality', wordpool)
    .then(({ data }) => {
      return data;
    });
};

export const addPersonalityToUser = (uuid, personalityData) => {
  console.log('here', uuid, personalityData.userP);
  return axios
    .patch(
      `https://be-nc-final-project-nomado.herokuapp.com/api/personality/${uuid}`,
      personalityData.userP
    )
    .then(({ data }) => {
      return data;
    });
};
