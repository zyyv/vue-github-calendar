import { createI18n } from 'vue-i18n'
import type { UserModule } from '~/types'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob('../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]: [string, any]) => {
      const [, language] = key.match(/locales\/(.*)\.ya?ml/)!
      return [language, value.default]
    }),
)

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  messages,
})

export const install: UserModule = (app) => {
  app.use(i18n)
}
