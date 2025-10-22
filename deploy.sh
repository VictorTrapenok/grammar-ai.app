#!/bin/bash

echo "Start"

rm -rf ./build

npm run build
 
echo "Build done"

rm -rf ./app-ai

git clone https://https://github.com/VictorTrapenok/grammar-ai.app.git -b gh-pages

mv ./app-ai/.git ./build/.git
rm -rf ./app-ai
cd build
echo "grammar-ai.app" > CNAME
git add .
git commit -m "Deploy"
git push

rm -rf ./build
echo "Deploy done"
