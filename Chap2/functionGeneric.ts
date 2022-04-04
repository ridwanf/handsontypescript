interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(args: T): number {
  return args.length;
}

console.log(getLength<string>('22'));
console.log(getLength("Hello world."));