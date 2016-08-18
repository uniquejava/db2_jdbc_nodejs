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