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

*Note:* If you're using the native `Promise.all()` function, make sure to `.bind()` it to the `Promise` before passing it into `liftp`.

``` javascript
var all = Promise.all.bind(Promise);
var lift = liftp(all);
```
