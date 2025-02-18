#!/bin/bash
#shopt -s expand_aliases

# named a folder and a file variable as it will be required afterwards
FOLDER=~/sample
FILE=$FOLDER/sample.txt


# Create a folder named sample in home directory
mkdir -p $FOLDER

# Inside sample folder create a file called sample.txt
touch $FILE

<<COMMENT
Add the following content to the file
    Hi! This is just a sample text file created using a shell script.
COMMENT

echo Hi! This is just a sample text file created using a shell script. > $FILE

# Print the contents of the file
cat $FILE

# Print the occurances of the letter 't' in the sample.txt
echo -n "Occurances of the letter t in sample.txt: "
grep t -o $FILE | wc -l

# Change the owner permission to allow all the operations on the file
chmod u+rwx $FILE

<<COMMENT
Write a command to append the following content in sample.txt file
    Hi! This is just another sample text added to the file
COMMENT

echo Hi! This is just another sample text added to the file >> $FILE

# Change the group permission to allow only read operation
chmod g=r $FILE

# Change all users permission to deny any sort of access to sample.txt
chmod 000 $FILE

# Write a command to create a file named sample2.txt with content similar to that of the sample.txt
cp $FILE $FOLDER/sample2.txt

# Add some random 1000 lines in the sample.txt file.
chmod u+rw $FILE
for i in {1..1000}
do
    echo "Line : " $i >> $FILE
done

# Write a command to print the top 50 lines of the file
head -n 50 $FILE

# Write a command to print the bottom 50 lines of the file
tail -n 50 $FILE

# Add 5 files in the same folder named: prog1.txt prog2.txt program.txt code.txt info.txt
touch $FOLDER/prog1.txt $FOLDER/prog2.txt $FOLDER/program.txt $FOLDER/code.txt $FOLDER/info.txt

#Write the command to list files which have "prog" in its name
ls $FOLDER | grep prog

# Create an alias of the command used at the step o.
alias lsprog='ls ~/sample | grep prog'