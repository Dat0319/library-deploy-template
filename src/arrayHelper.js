function arrayHelper() {
  return {
    add(array, item) {
      array.push(item);
      return array;
    },
    replace(array, index, value) {
      array[index] = value;
      return array;
    },
    remove(array, index, length = 1) {
      array.splice(index, length);
      return array;
    },
    getFirst(array) {
      return array[0] || null;
    },
    getLast(array) {
      return array[array.length - 1] || null;
    },
    getArray(array, index, defaultValue = null) {
      return array[index] || defaultValue;
    }
  };
}

export default arrayHelper();
