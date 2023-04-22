const fs = require("fs");
const dayjs = require("dayjs");

function main() {
    try {
        // mmm for alphabetical month, mm for months in number hh:mmA, A for AM, PM
        const format = "YYYY-MMM-DD, ddd hh:mmA";
        const dateFormat = dayjs().format(format);
        console.log(dateFormat);
        fs.writeFileSync('date-log.txt', dateFormat);
    } catch (e) {
        console.log("Error", e);
    }
}

main();