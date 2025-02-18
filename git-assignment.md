- Create a private github repo named "i-am-a-git-noob"
    https://github.com/Trideep-Nandi/i-am-a-git-noob.git
- Create a new repository on local in an empty directory (NOTE: do not clone)
```sh
git init
```

Ques: What changes did you observe in the current directory after initializing local repo?
	Initialized empty Git repository in /Users/trideepnandi/Syvora/training/day03-git-assignment/i-am-a-git-noob/.git/
	
- Point remote of your local git repo to the newly created repo on github 
```sh
git remote add origin git@github.com:Trideep-Nandi/i-am-a-git-noob.git
```
- Print current git configs on terminal
```sh
git config --list
credential.helper=osxkeychain
init.defaultbranch=main
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
remote.origin.url=git@github.com:Trideep-Nandi/i-am-a-git-noob.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
```
- Update git config with your name and email address (only for current repository)
```sh
git config --local user.name "Trideep Nandi"
git config --local user.email "tnandi@qodeleaf.com"
```

```sh
credential.helper=osxkeychain
init.defaultbranch=main
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
remote.origin.url=git@github.com:Trideep-Nandi/i-am-a-git-noob.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
user.name=Trideep Nandi
user.email=tnandi@qodeleaf.com
```
- Create a file named "test1.txt"
```sh
touch test1.txt
```
- Added line with text "first line in file" in "test1.txt".
```sh
echo first line in file > test1.txt
```

```sh
cat test1.txt
first line in file
```
- Push this file to your github repo.
```sh
git add test1.txt
gcom -m "Added a line to the test1.txt file"
git push -u origin main
```
- Append line with text "second line in file" in "test1.txt".
```sh
echo second line in file >> test1.txt
```

```sh
cat test1.txt
first line in file
second line in file
```
- Add file to the staging area.
```sh
git add test1.txt
```
- Check the status of the file in all staging area
```sh
git status
```

```sh
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   test1.txt
```
- Append line with text "Third line in file" in "test1.txt". (Note status of files across different areas).
```sh
echo Third line in file >> test1.txt
```

```sh
cat test1.txt
first line in file
second line in file
Third line in file
```
-  Remove "test1.txt" from the staging area.
```sh
git restore --staged test1.txt
```

```sh
git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   test1.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
- Create commit with message "My First Commit"
```sh
git add test1.txt
gcom -m "My First Commit"
```
- Push commit to the remote repo 
```sh
git push origin main
```
NOTE: checklist commits pushed to the remote

- Update message of last commit "My First Commit" to "My Second Commit" (without creating a new commit)
```sh
git commit --amend
```
- Push commit with the updated message to the remote repo
```sh
git push origin main --force
```
- Check the difference between the last and second last commits.
```sh
git diff HEAD HEAD^1
```

```sh
diff --git a/test1.txt b/test1.txt
index 8619274..f581c70 100644
--- a/test1.txt
+++ b/test1.txt
@@ -1,3 +1 @@
 first line in file
-second line in file
-Third line in file
```
- Revert the last commit and check the updated commit logs history.
```sh
git revert HEAD
git log
```

```sh
commit 809c2921ecbac94a02d07d69803a537e6daa0beb (HEAD -> main)
Author: Trideep Nandi <tnandi@qodeleaf.com>
Date:   Mon Feb 10 15:52:04 2025 +0530

    Revert "My Second Commit"

    Reverting the last commit
    This reverts commit 89002335edace5f612cd6cc21a7e11f4e5295cdf.

commit 89002335edace5f612cd6cc21a7e11f4e5295cdf (origin/main)
Author: Trideep Nandi <tnandi@qodeleaf.com>
Date:   Mon Feb 10 15:51:00 2025 +0530

    My Second Commit

commit b6bcf7fd2ba3c534f05a9973a3e97ba13f6bda0f
Author: Trideep Nandi <tnandi@qodeleaf.com>
Date:   Mon Feb 10 15:47:14 2025 +0530

    Added a line to the test1.txt file
```
- Append line with text "Fourth line in file" in "test1.txt" and commit it.
```sh
echo Fouth line in file >> test1.txt
git add test1.txt
gcom -m "Added a fourth line to the test1.txt"
```
- Update the last commit such that the "test1.txt"  also contains "Fifth line in file" (without creating a new commit)
```sh
echo Fifth line in file >> test1.txt
git add test1.txt
git commit --amend
```
- Push the updated commits to the remote repository
```sh
git push origin main
```
- Append some content in "test1.txt" file
```sh
echo Sixth line in the file >> test1.txt
```
- Pull all the content from remote repository to local repository
```sh
git pull
```
- Clone the remote repository to some other directory in your local system.
```sh
git clone https://github.com/Trideep-Nandi/i-am-a-git-noob.git ~/Syvora
```