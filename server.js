#!/usr/bin/env node

const { spawn } = require('node:child_process')

const port = process.env.PORT || 3000

const mode = process.argv[2] || 'dev'

const commands = {
	dev: ['next', 'dev', '-p', String(port)],
	'dev-https': ['next', 'dev', '-p', String(port), '--experimental-https'],
	start: ['next', 'start', '-p', String(port)],
}

if (!commands[mode]) {
	console.error(`❌ Unknown mode: "${mode}"`)
	console.error(`   Available: ${Object.keys(commands).join(', ')}`)
	process.exit(1)
}

console.info(`🚀 Running: ${commands[mode].join(' ')}`)

Bun.spawn(commands[mode], { stderr: 'inherit', stdin: 'inherit', stdout: 'inherit' })
