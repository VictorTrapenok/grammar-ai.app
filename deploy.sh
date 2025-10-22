#!/bin/bash

echo "Start"

rm -rf ./build

npm run build
 
echo "Build done"

rm -rf ./malo

git clone https://github.com/digital-containment/malo.git -b gh-pages

mv ./malo/.git ./build/.git
rm -rf ./malo
cd build
echo "scp-1471.app" > CNAME
git add .
git commit -m "Deploy"
git push

rm -rf ./build
echo "Deploy done"
