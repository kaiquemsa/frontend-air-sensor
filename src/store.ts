// @ts-nocheck
import { createStore } from 'redux'

interface State {
  sidebarShow: boolean;
  theme: string;
}

const initialState: State = {
  sidebarShow: true,
  theme: 'light',
}

type Action = { type: string; [key: string]: any };

const changeState = (state: State = initialState, { type, ...rest }: Action): State => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store

