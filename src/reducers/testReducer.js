const testReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADDITION':
      return state + 1;
    default:
      return state;
  }
}

export default testReducer;
