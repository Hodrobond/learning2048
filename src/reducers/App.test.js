import App from './App'

const defaultNotifications = {
      loss: false,
      victory: false,
      victoryAcknowledged: false
}

const defaultState = {
  Notifications: defaultNotifications
};

it('Initialize', () => {
  const initialized = App(0, {type:'NEW_GAME'});
  const solution = {
    Notifications: defaultNotifications
  };
  expect(initialized).toEqual(solution);
})

it('Win Game', () => {
    const wonStatus = App(defaultState, {type:'WIN_GAME'});
    const solution = {
      Notifications: {
        loss: false,
        victory: true,
        victoryAcknowledged: false
      }
    }
    expect(wonStatus).toEqual(solution);
})

it('Lose Game', () => {
  const lostStatus = App(defaultState, {type:'LOSE_GAME'});
  const solution = {
    Notifications: {
      loss: true,
      victory: false,
      victoryAcknowledged: false
    }
  }
  expect(lostStatus).toEqual(solution);
})

it('Continue Game', () => {
  var testState = {
    Notifications:{
      ...defaultNotifications,
      victory: true
    }
  }
  const continueStatus = App(testState, {type:'CONTINUE_GAME'});
  const solution = {
    Notifications: {
      loss: false,
      victory: true,
      victoryAcknowledged: true
    }
  }
  expect(continueStatus).toEqual(solution);
})

it('New Game', () => {
  const wonkyState = {
    Notifications: {
      loss: true,
      victory: true,
      victoryAcknowledged: true
    }
  }
  const newStatus = App(wonkyState, {type:'NEW_GAME'});
  expect(newStatus).toEqual(defaultState)
})
