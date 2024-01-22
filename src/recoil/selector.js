import { selector } from 'recoil'
import { accountState } from './atoms'

export const userLoginState = selector({
  key: 'userLogin',
  get: ({ get }) => {
    const data = get(accountState)
    const result = !(data === '' || data === null)
    return result
  },
})
