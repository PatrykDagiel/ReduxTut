console.clear()

const createPolicy() => {
  return {  // Action (analogy, creating brokerage policy)
    type: 'CREATE_POLICY',
    payload: {
        name: 'Alex',
        amount: 20
    }
    }
  };
};

const deletePolicy(name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};
