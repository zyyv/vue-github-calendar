import { $fetch } from 'ohmyfetch'
import type { ApiResponse } from '~/types/common'

export const useContributions = async(username: string, year = 'last') => {
  const API = `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
  const data = await $fetch(API)
  return data as ApiResponse
}
