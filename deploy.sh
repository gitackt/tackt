yarn build
cd build 
git init
git remote add origin https://github.com/gitackt/gitackt.github.io.git
git add .
git commit -m "Initialise files with build"
git push -ff origin master
echo 'Build was successfully deployed!'
cd ../ 