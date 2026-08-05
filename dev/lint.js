import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// Change working directory to root so ESLint processes files relative to root
process.chdir(rootDir)

const require = createRequire(import.meta.url)
const eslintPkgDir = path.dirname(require.resolve('eslint/package.json'))
const eslintBin = path.join(eslintPkgDir, 'bin/eslint.js')

await import(`file://${eslintBin}`)
