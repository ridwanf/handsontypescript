function getLength(args) {
    if (args.hasOwnProperty("length")) {
        return args["length"];
    }
    return 0;
}
console.log(getLength(22));
console.log(getLength("Hello world."));
