.PHONY: setup
setup:
	# git config
	git config --local pull.rebase true
	git config --local branch.autosetuprebase always
	git config --local rerere.enabled true
	@echo "✅ Setup done"