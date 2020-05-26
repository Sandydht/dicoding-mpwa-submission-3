const dbPromised = idb.open("premiere-league", 1, upgradeDb => {
    let standingsObjectStore = upgradeDb.createObjectStore("standings", {
        keyPath: "id"
    });
    standingsObjectStore.createIndex("name", "name", { unique: false });
});

function saveStandings(standing) {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                let tx = db.transaction("standings", "readwrite");
                let store = tx.objectStore("standings");
                store.put(standing);
                return tx.complete;
            })
            .then(() => {
                resolve("Artikel berhasil disimpan");
            })
            .catch(() => {
                reject("Artikel gagal disimpan");
            })
    })
}

function getAllStandings() {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                let tx = db.transaction("standings", "readonly");
                let store = tx.objectStore("standings");
                return store.getAll();
            })
            .then(standing => {
                resolve(standing);
            })
            .catch(err => {
                reject(err);
            })
    })
}