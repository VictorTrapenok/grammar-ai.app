#!/bin/bash

echo "Start"

rm -rf ./build

npm run build
 
echo "Build done"

rm -rf ./app-ai

git clone https://github.com/VictorTrapenok/grammar-ai.app.git -b gh-pages

mv ./grammar-ai.app/.git ./build/.git
rm -rf ./grammar-ai.app
cd build
echo "grammar-ai.app" > CNAME
git add .
git commit -m "Deploy"
git push

rm -rf ./build
echo "Deploy done"
