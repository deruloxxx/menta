import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let data;

data = 10.5;
console.log(data.toFixed(0));

data = "hoge";
console.log(data.charAt(0));

function show(result: string) {
  return `結果は${result}です`;
}

console.log(show('100' as any));

const dat: string[][] = [['Java','aaaa'],['aaa','bbb']]

console.log(dat[0]);

// 文字列で連想配列を管理
const obj: { [key: string]: string; }
= {
  'hoge':'ほげ',
  'foo':'ふう',
  'bar':'ばあ',
};

// console.log(obj.hoge)
// console.log(obj['hoge'])

interface StringMap {
  [index: string]: string;
}

const obj2 = {
  'hoge': 'ほげ',
  'ho': 'ほ',
  'ge': 'げ',
};

obj2.hoge = 'ピヨ';

console.log(obj2.hoge)

enum Sex {
  Male,
  female,
  unkown
}

const m : Sex = Sex.Male;
console.log(m)
console.log(Sex[m])

const dataes: [string, number , boolean]
= ['hoge', 10.355, false];

let dataaa: string | boolean;

const dataaaa: (string | number)[] = ['ほげ', 108, 'hoge'];

console.log(dataaaa[0])

// function triangle(base: number, height: number) {
//   return base * height / 2;
// }

// console.log(triangle(10, 5));

const triangle2 =
  (base: number, height: number):
  number => base * height / 2;

console.log(triangle2(10,3));

function showTime(time : Date = new Date()):
string {
  if( time === undefined) {
    return '現在時刻'　+ (new Date()).toLocaleDateString();
  } else {
    return '現在時刻' + time.toLocaleString();
  }
}

console.log(showTime());

function show1(value: number): void;
function show1(value: boolean): void;

function show1 (value: any): void {
  if (typeof value === 'number') {
    console.log(value.toFixed(0));
  } else {
    console.log(value ? '真' : '偽');
  }
}

show1(10.555);
show1(true);

function square(value: number):
  number | boolean {
    if (value < 0) {
      return false;
    } else {
      return Math.sqrt(value);
    }
}

console.log(square(9));
console.log(square(-9));

function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {}
  return value.toFixed(1);
}


function sum(...values: number[]) {
  let result = 0;
  for (const value of values) {
    result += value;
  }
  return result;
}
console.log(sum(1, 5, -8, 10));

class Figure {
  //publickプロパティ
  publick static Pi: number = 3.14159;
  // publickコンストラクター
  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }
  //　メソッド
  public show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}


bootstrap();

