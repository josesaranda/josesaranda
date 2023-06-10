#!/bin/bash

# Set the path to the folder you want to iterate over
folder_path="$PWD/packages/habitatcss/src"

# Iterate over all files in the folder
for file in "$folder_path"/*
do
    filename=$(basename "$file")
    extension="${filename##*.}"
    filename="${filename%.*}"

    if [[ "$filename" == *"mixins"* ]]; then
        continue
    fi

    npm run sass packages/habitatcss/src/$filename.scss dist/packages/habitatcss/$filename.min.css -- --style=compressed --no-source-map
    echo "$filename.css generated succesfully"
done

echo "Congrats! Compilation done!"