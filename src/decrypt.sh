#!/bin/bash

SECRET=$(echo -n $1 | openssl enc -aes-256-cbc -pbkdf2 -d -salt -k $2);
echo ::set-output name=decrypted-secret::$SECRET
