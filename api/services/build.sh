#! bin/bash
#BASEDIR=$(dirname "$0")
#echo $BASEDIR
#exit
TESTSCRIPT=$(./vendor/bin/phpunit ./app/tests/ExampleTest.php --stderr)
if [ $? == 0 ]; then
	echo "All tests passed"
	cd ../..
	GITCMD=$(git add *)
	git commit -m"$1"
    git push origin development
else
	echo "Failed"
fi
