MAC OSX nodejs connect DB2

### Env

    Mac OSX 10.11.6
    DB2 10.1 express c for Mac
    Webstorm 2016.2.1


### install dependency

```sh
➜  db2  $ npm i ibm_db --save     
npm WARN package.json db2@1.0.0 No description
npm WARN package.json db2@1.0.0 No repository field.
npm WARN package.json db2@1.0.0 No README data
-
> ibm_db@1.0.0 install /Users/cyper/WebStormProjects/db2/node_modules/ibm_db
> node installer/driverInstall.js

Downloading DB2 ODBC CLI Driver from http://public.dhe.ibm.com/ibmdl/export/pub/software/data/db2/drivers/odbc_cli//macos64_odbc_cli.tar.gz...
```

### nodejs version
see https://www.npmjs.com/package/ibm_db

```js
var ibmdb = require('ibm_db');

ibmdb.open("DRIVER={DB2};DATABASE=SAMPLE;HOSTNAME=localhost;UID=db2inst1;PWD=db2inst1;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
    if (err) return console.log(err);

    conn.query('select count(*) from STAFF', function (err, data) {
        if (err) console.log(err);
        else console.log(data);

        conn.close(function () {
            console.log('done');
        });
    });
});
```

### jdbc version
see my blog: http://my.oschina.net/uniquejava/blog/225029

```java
package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

public class Db2Test {
    public static void main(String[] args) throws Exception {
        Class.forName("com.ibm.db2.jcc.DB2Driver");
        Connection conn = DriverManager.getConnection("jdbc:db2://localhost:50000/sample", "db2inst1", "db2inst1");
        ResultSet rs = conn.createStatement().executeQuery("select count(*) from STAFF");
        rs.next();
        int count = rs.getInt(1);
        System.out.println(count);
        rs.close();
        conn.close();
    }
}
```


