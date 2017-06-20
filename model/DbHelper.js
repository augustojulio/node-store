function saveToDB(dbObject) {
    dbObject.save(function(err, dbObject) {
        if (err) return console.error(err);
    });
}

exports.saveToDB = saveToDB;
