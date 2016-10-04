#! bin/bash

TESTSCRIPT=$(./vendor/bin/phpunit ./app/tests/ExampleTest.php --stderr)
if [ $? == 0 ]; then
	echo "All tests passed"

	TESTCASESCRIPT=$(./vendor/bin/phpmd ./app/ text codesize,unusedcode,naming --exclude /app/tests/TestCase.php)

	if [ $? == 0 ]; then
		
		echo "All good."
		cd ../..
		GITCMD=$(git add *)
		GITCOMMIT=$(git commit -m"$1")
    	GITPUSH=$(git push origin development)

    else
    	echo "Static analyser failed"
    fi

	
else
	echo "Failed"
fi
