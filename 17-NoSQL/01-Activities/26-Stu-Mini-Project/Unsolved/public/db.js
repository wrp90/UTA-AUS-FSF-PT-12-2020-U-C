let db;
// create a new db request for a "BudgetDB" database.
const request = indexedDB.open('BudgetDB', 1);

request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true
  const db = event.target.result;

  const budgetStore = db.createObjectStore('BudgetStore', {
    keypath: 'itemID',
    autoIncrement: true
  });
  // budgetStore.createIndex('itemIndex', 'item')
};


request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  // access your pending object store
  // add record to your store with add method.
  const transaction = db.transaction(['BudgetStore'], 'readwrite');
  const BudgetStore = transaction.objectStore('BudgetStore');

  BudgetStore.add(record);
}

function checkDatabase() {
  const transaction = db.transaction(['BudgetStore'], 'readwrite');
  const BudgetStore = transaction.objectStore('BudgetStore');
  // open a transaction on your pending db
  const getCursorRequest = BudgetStore.openCursor();
  // access your pending object store
  getCursorRequest.onsuccess = e => {
    const cursor = e.target.result;
    if (cursor) {
      console.log(cursor.value);
      cursor.continue();
    } else {
      console.log("No documents left!");
    }
  };
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          const transaction = window.BudgetDB.open('BudgetDB', 1);
          // access your pending object store
          transaction.onsuccess = e => {
            const request = e.target.resutl;
            if (request) {
              console.log(request.value);
              request.continue();
            } else {
              console.log('No items left!');
            }
          }
          // clear all items in your store
          BudgetStore.clear();
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
