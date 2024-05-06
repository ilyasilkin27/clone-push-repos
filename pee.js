import { exec } from 'child_process';

const repositories = [];

const commitAndPush = (repoName) => {
    const commands = [
        `cd ${repoName}`, // Перейти в директорию репозитория
        'git add .', // Добавить все изменения для коммита
        'git commit -m "update autograding.json"', // Создать коммит с сообщением
        'git push' // Отправить изменения на удаленный репозиторий
    ];

    // Выполнить команды последовательно
    exec(commands.join(' && '), (error, stdout, stderr) => {
        if (error) {
            console.error(`Error pushing changes for ${repoName}: ${stderr}`);
        } else {
            console.log(`Changes pushed successfully for ${repoName}`);
        }
    });
};

repositories.forEach(repo => commitAndPush(repo));
