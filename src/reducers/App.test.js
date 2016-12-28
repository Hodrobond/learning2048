import App from './App'

const defaultNotifications = {
      loss: false,
      victory: false,
      victoryAcknowledged: false
}

const historyTemplate = {
  past: [],
  present: [],
  future: []
}

it('Initialize', () => {
  const initialized = App(0, {type:'NEW_GAME'});
  const solution = defaultNotifications;
  expect(initialized.present).toEqual(solution);
})

it('Win Game', () => {
  const testState = {
    ...historyTemplate,
    present: defaultNotifications
  }
  const wonStatus = App(testState, {type:'WIN_GAME'});
  const solution = {
    loss: false,
    victory: true,
    victoryAcknowledged: false
  }
  expect(wonStatus.present).toEqual(solution);
})

it('Lose Game', () => {
  const testState = {
    ...historyTemplate,
    present: defaultNotifications
  }
  const lostStatus = App(testState, {type:'LOSE_GAME'});
  const solution = {
    loss: true,
    victory: false,
    victoryAcknowledged: false
  }
  expect(lostStatus.present).toEqual(solution);
})

it('Continue Game', () => {
  var testState = {
    ...historyTemplate,
    present: {
      ...defaultNotifications,
      victory: true
    }
  }
  const continueStatus = App(testState, {type:'CONTINUE_GAME'});
  const solution = {
    loss: false,
    victory: true,
    victoryAcknowledged: true
  }
  expect(continueStatus.present).toEqual(solution);
})

it('New Game', () => {
  const wonkyState = {
    ...historyTemplate,
    present: {
      loss: true,
      victory: true,
      victoryAcknowledged: true
    }
  }
  const newStatus = App(wonkyState, {type:'NEW_GAME'});
  expect(newStatus.present).toEqual(defaultNotifications)
})
