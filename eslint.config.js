import config from "@esfront/eslint-config";

export default [
  ...config,
  {
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react"],
            [
              "^@mui/base",
              "^@mui/material/styles",
              "^@mui/system",
              "^@mui/material",
              "^@mui/utils",
            ],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ],
        },
      ],
    },
  },
  {
    ignores: ["node_modules/*"],
  },
];
