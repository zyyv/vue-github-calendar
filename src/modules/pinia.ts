import type { UserModule } from '~/types'

export const pinia = createPinia()

export const install: UserModule = app => app.use(pinia)

export * from '../store/user'
