module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "transform-object-rest-spread", 
        "transform-class-properties",
        "@babel/plugin-proposal-class-properties",
        "@babel/transform-es2015-template-literals"
    ],
    "rules": {
        "no-extra-semi":"error"
    }
};
