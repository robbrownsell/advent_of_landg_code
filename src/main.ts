import * as fs from 'fs';
export class Main {

    loadInputFromResources(): String {
        return fs.readFileSync('resources/input.txt', 'utf8');
    }

}

console.log(new Main().loadInputFromResources());
