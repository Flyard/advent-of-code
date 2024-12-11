import * as fs from 'fs';

const input:String = fs.readFileSync('./day1/input.txt', "utf-8");
const numbers:number[] = input.match(/\d+/g).map(Number);

let list1: number[] = [];
let list2: number[] = [];


for(let i:number = 0; i < numbers.length; i++) {
    if(i % 2 === 0) {
        list1.push(numbers[i]);
    } else {
        list2.push(numbers[i]);
    }
}

list1.sort();
list2.sort();

function part1() {
    let sum: number = 0;

    for(let i:number =0; i< list1.length; i++) {
        sum += Math.abs(list1[i] - list2[i]);
    }

    console.log(sum)
}

part1();

function part2() {
    let sum:number = 0;
    for(let i of list1) {
        let count:number = 0;
        for(let j of list2) {
            if(i === j) {
                count++;
            }
        }
        sum += i * count
    }
    console.log(sum)
}

part2();


