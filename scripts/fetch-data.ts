import { $fetch } from 'ohmyfetch'
import fs from 'fs-extra'

const API = 'https://github-contributions-api.jogruber.de/v4/zyyv?y=2022'

const data = await $fetch(API)

await fs.writeJSON('data/contributions.json', data, { spaces: 2 })
