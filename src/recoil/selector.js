import { selector } from 'recoil'
import { accountState } from './atoms'

export const todoSortState = selector({
  key: 'todoSortState',
  get: ({ get }) => {
    const data = get(accountState)
    const result = data.filter((v) => v.state === true)
    return result
  },
})
