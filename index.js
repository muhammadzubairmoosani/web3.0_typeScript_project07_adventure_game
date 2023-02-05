#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the adventure game!");
const game = {
    start: () => {
        inquirer
            .prompt([
            {
                type: "list",
                name: "choice",
                message: "You are lost in a forest. Which way would you like to go?",
                choices: ["Left", "Right"],
            },
        ])
            .then((answers) => {
            if (answers.choice === "Left") {
                game.left();
            }
            else {
                game.right();
            }
        });
    },
    left: () => {
        inquirer
            .prompt([
            {
                type: "confirm",
                name: "choice",
                message: "You come across a bear. Do you run away or try to fight it?",
            },
        ])
            .then((answers) => {
            if (answers.choice) {
                console.log("You successfully run away from the bear!");
            }
            else {
                console.log("You were unfortunately killed by the bear.");
            }
            game.end();
        });
    },
    right: () => {
        inquirer
            .prompt([
            {
                type: "list",
                name: "choice",
                message: "You come across a river. Do you try to swim across or follow it?",
                choices: ["Swim", "Follow"],
            },
        ])
            .then((answers) => {
            if (answers.choice === "Swim") {
                console.log("You successfully swim across the river!");
            }
            else {
                console.log("You find a bridge and safely cross the river.");
            }
            game.end();
        });
    },
    end: () => {
        console.log("The game is over.");
    },
};
game.start();
