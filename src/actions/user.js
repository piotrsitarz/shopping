export const getUser = (user) => ({
  type: 'GET_USER',
  user
});

export const removeUser = () => ({
    type: 'REMOVE_USER'
});
