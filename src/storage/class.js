const storage_prefix = "__prod_template__";

const Storage = function (origin) {
  this.prefix = storage_prefix;
  this.origin = origin;
};

Storage.prototype.get = function (key, defaultValue) {
  try {
    const data = JSON.parse(this.origin.getItem(`${this.prefix}${key}`));
    const { ttl } = data;
    if (ttl) {
      const now = new Date().getTime();
      if (now <= ttl) {
        return data[key];
      } else {
        return defaultValue;
      }
    } else {
      return data[key];
    }
  } catch (error) {
    return defaultValue;
  }
};

Storage.prototype.set = function (key, value, ttl = -1) {
  const setKey = `${this.prefix}${key}`;
  let data = { key: value };
  if (ttl > 0) {
    const _ttl = { ttl: new Date().getTime() + ttl };
    data = { ...data, ..._ttl };
  }
  this.origin.setItem(setKey, JSON.stringify(data));
};

Storage.prototype.remove = function (key) {
  this.origin.removeItem(`${this.prefix}${key}`);
};

export default Storage;
