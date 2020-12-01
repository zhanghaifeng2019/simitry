const fs = require('fs');

module.exports = new (class {
  split(packageJsonPath) {
    const json = JSON.parse(fs.readFileSync(packageJsonPath));
    const keys = Object.keys(json.dependencies);
    const groups = {};

    for (const key of keys) {
      groups[key] = {
        name: key,
        test: new RegExp(`node_modules\/${key}\/`),
        enforce: true,
      };
    }

    return groups;
  }
})();
