install:
			npm install

brain-games:
			node bin/brain-games.js

publish:
			npm publish --dry-run

lint:
			npx eslint .

logs:
			git log --oneline --decorate --graph