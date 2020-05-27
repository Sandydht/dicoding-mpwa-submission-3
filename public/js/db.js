const dbPromised = idb.open("premiere-league", 1, upgradeDb => {
    let standingsObjectStore = upgradeDb.createObjectStore("standings", {
        keyPath: "id"
    });
    standingsObjectStore.createIndex("name", "name", { unique: false });
});

function saveStandings(standing) {
    dbPromised
        .then(db => {
            let tx = db.transaction("standings", "readwrite");
            let store = tx.objectStore("standings");
            store.put(standing);
            return tx.complete;
        })
        .then(() => M.toast({ html: 'Artikel berhasil disimpan' }))
        .catch(() => M.toast({ html: 'Artikel gagal disimpan' }))
}

function getAll() {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                let tx = db.transaction("standings", "readonly");
                let store = tx.objectStore("standings");
                return store.getAll();
            })
            .then(standings => resolve(standings))
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                let tx = db.transaction("standings", "readonly");
                let store = tx.objectStore("standings");

                return store.get(id);
            })
            .then(standing => resolve(standing))
    })
}

function deleteStandings(id) {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(db => {
                let tx = db.transaction("standings", "readwrite");
                let store = tx.objectStore("standings");
                store.delete(id);
            })
            .then(() => resolve("Artikel berhasil dihapus"))
            .catch(() => reject("Artikel gagal dihapus"))
    })
}