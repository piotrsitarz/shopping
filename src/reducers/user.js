export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...action.user
      };
    case 'REMOVE_USER':
      return {};
    default:
      return state;
  }
};
