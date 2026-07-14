.PHONY: setup
setup:
	# git config
	git config --local pull.rebase true
	git config --local branch.autosetuprebase always
	git config --local rerere.enabled true
	git config --local alias.pushfl "push --force-with-lease"
	@echo "✅ Setup done"
