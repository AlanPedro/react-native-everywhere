const testReducer = (state = 0, action) => {
  console.log('Test Reducer');
  switch (action.type) {
    case 'ADDITION':
      return state + 1;
    default:
      return state;
  }
}

export default testReducer;
