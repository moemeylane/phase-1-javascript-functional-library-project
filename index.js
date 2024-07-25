
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key, collection));
      }
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let startIdx = 0;

  if (acc === undefined) {
    acc = Array.isArray(collection) ? collection[0] : Object.values(collection)[0];
    startIdx = 1;
  }

  if (Array.isArray(collection)) {
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    const values = Object.values(collection);
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
  }

  return acc;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

// Array Functions
function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

// BONUS: mySortBy
function mySortBy(array, callback) {
  return [...array].sort((a, b) => {
    return callback(a) - callback(b);
  });
}

// BONUS: myFlatten
function myFlatten(array, shallow = false, newArr = []) {
  array.forEach(item => {
    if (Array.isArray(item)) {
      if (shallow) {
        newArr.push(...item);
      } else {
        myFlatten(item, shallow, newArr);
      }
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

// Object Functions
function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}