# liftp

the liftPromiseN for Promise lovers before the era of async/await.

## Usage

```javascript
import fs from 'fs';
import Promise from 'bluebird';
import liftp from 'liftp';

var { all } = Promise,
    lift    = liftp(all),
    show    = lift(console.log);

Promise.promisifyAll(fs);

show(fs.readFile('./index.js'));
```

