// create folder called ts
// find . | grep json | node people.js '<your-fb-name>'

const fs = require('fs');
console.log(process.argv.slice(3))
for (const p of process.argv.slice(3)) {
    console.log('hiii' + p);
    const x = require(p);
    console.log('hi' + x);
    if (!x.participants || x.participants.length != 2 || x.thread_type != "Regular" || x.messages.length < 1000) { continue; }

    const fw = fs.openSync(`ts/${x.participants[0].name.replace(' ', '_')}.txt`, 'a');
    console.log(`${p} ${x.participants[0].name}`);

    for (const i of x.messages) {
        if (i.sender_name == process.argv[2]) {
            fs.writeSync(fw, `${i.timestamp_ms}\t1\n`);
        } else {
            fs.writeSync(fw, `${i.timestamp_ms}\t0\n`);
        }
    }
    fs.closeSync(fw);
}


