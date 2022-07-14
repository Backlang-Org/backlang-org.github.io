$FolderName = "dist"

if (Test-Path $FolderName) {
    Remove-Item -LiteralPath $FolderName -Force -Recurse
}

yarn build
cd $FolderName

git init
git checkout -b main
git add -A
git commit -m "scriped deploy"

git push -f git@github.com:Backlang-Team/docs.git main:gh-pages

cd ..