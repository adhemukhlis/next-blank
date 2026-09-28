const port = Bun.env.PORT || 3000

const mode = Bun.argv[2] || 'dev'

const commands = {
	dev: ['bun', '--bun', 'next', 'dev', '-p', String(port)],
	'dev-https': ['bun', '--bun', 'next', 'dev', '-p', String(port), '--experimental-https'],
	start: ['bun', '--bun', 'next', 'start', '-p', String(port)],
}

if (!commands[mode]) {
	console.error(`❌ Unknown mode: "${mode}"`)
	console.error(`   Available: ${Object.keys(commands).join(', ')}`)
	process.exit(1)
}

console.info(`🚀 Running: ${commands[mode].join(' ')}`)

Bun.spawn(commands[mode], { stderr: 'inherit', stdin: 'inherit', stdout: 'inherit' })
