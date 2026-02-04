#!/bin/bash
echo "Enter number"
read n

if [ $n -gt 10 ]
then
  echo "Greater than 10"
else
  echo "Less than or equal to 10"
fi
