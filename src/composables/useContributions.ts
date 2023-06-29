// import { $fetch } from 'ohmyfetch'
import { $fetch } from 'ohmyfetch'

// import DATA from '~/data/contributions.json'
import type { ApiResponse } from '~/types'

// export const useContributions = async(username: string, year = 'last') => {
//   const API = `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
//   const data = await $fetch(API)
//   return data as ApiResponse
// }

export async function useContributions(username: string, _year = 'last') {
  const API = `https://github-contributions-api.jogruber.de/v4/${username}?y=${_year}`

  return await $fetch<ApiResponse>(API)
}
