#! /bin/sh

function restartNode(){
   IP=$1
   KEY=$2
   KEY_PATH="$HOME/Workspace/script/aws-key/$KEY"
   echo $KEY_PATH
   sudo ssh -i $KEY_PATH ubuntu@$IP 'bash -s' < reloadpm2.sh
}

restartNode $1 $2

