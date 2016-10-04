#! bin/bash

TESTSCRIPT=$(./vendor/bin/phpunit ./app/tests/ExampleTest.php --stderr)
if [ $? == 0 ]; then
	echo "All tests passed"
	cd ../..
	GITCMD=$(git add *)
	GITCOMMIT=$(git commit -m"$1")
    GITPUSH=$(git push origin development)
else
	echo "Failed"
fi
