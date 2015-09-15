stat:
	git status -s

build:
	cd tools/textgenerator
	/bin/node uw-grab-bibles.js
	/bin/node generate.js -a
	/bin/node create_texts_index.js

commit:
	git diff >/tmp/git-diff.out 2>&1
	git commit -a
	git pull --no-edit origin master
	git push origin master

publish:
	touch publish
	git add publish
	git commit publish -m 'Publishing site'
	git push origin master
	sleep 2
	echo "Check https://bible.unfoldingword.org/ in a few moments"
	sleep 5
	rm -f publish
	git commit publish -m 'Cleaning up'
	git push origin master
