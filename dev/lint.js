import { join } from 'node:path'
import { resolveSync } from 'bun'

const rootDir = join(import.meta.dir, '..')

// Change working directory to root so ESLint processes files relative to root
process.chdir(rootDir)

const eslintPkg = resolveSync('eslint/package.json', import.meta.dir)
const eslintBin = eslintPkg.replace('package.json', 'bin/eslint.js')

await import(eslintBin)
