import readline from 'readline';
import { exec } from 'child_process';

const cloneRepos = (userName) => {
    const command = `git clone git@github.com:hexlet-college-students/l7-controlled-form-v2-${userName}`;
    exec(command, (error, stdout, stderr) => {
        if (error && stderr.trim() !== '') {
            console.error(`Error cloning repository for ${userName}: ${stderr}`);
            return;
        }
        console.log(`Repository for ${userName} cloned successfully`);
    });
};

const userNames = ['19AnastasiaTsareva20']; // Array containing usernames to replace

const interval = 1000; // Interval in milliseconds (1 second)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currentIndex = 0;

const cloneNextRepo = () => {
    if (currentIndex < userNames.length) {
        cloneRepos(userNames[currentIndex]);
        currentIndex++;
    } else {
        clearInterval(intervalId);
        rl.close();
    }
};

const intervalId = setInterval(cloneNextRepo, interval);