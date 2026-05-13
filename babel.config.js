<<<<<<< HEAD
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
=======
module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
>>>>>>> 2379b3a0e3f36cb407beb02f77ee2aa7c674c960
