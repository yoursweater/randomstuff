#!/bin/bash

read -p "Rock, paper or scissors?" choice

floor=0
ceiling=3
range=$(($ceiling-$floor+1))
result=$RANDOM
let "result %= $range";
result=$(($result+$floor))

selection="rock"
if [ $result -eq 1 ]
then
    selection="rock"
elif [ $result -eq 2 ]
then 
    selection="paper"
else
    selection="scissors"
fi

if [ $selection = $choice ]
then
    echo $selection $choice
    echo "tie!"
elif [ $selection = "rock" ] && [ $choice = "scissors" ]
then
    echo $selection $choice
    echo "you lose!"
elif [ $selection = "rock" ] && [ $choice = "paper" ]
then
    echo $selection $choice
    echo "you win!"
elif [ $selection = "paper" ] && [ $choice = "scissors" ]
then
    echo $selection $choice
    echo "you win!"
elif [ $selection = "paper" ] && [ $choice = "rock" ]
then
    echo $selection $choice
    echo "you lose!"
elif [ $selection = "scissors" ] && [ $choice = "paper" ]
then
    echo $selection $choice
    echo "you lose!"
elif [ $selection = "scissors" ] && [ $choice = "rock" ]
then
    echo $selection $choice
    echo "you win!"
fi