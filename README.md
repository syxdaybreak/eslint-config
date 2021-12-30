# `@syxdaybreak/eslint-config`

Usage:

### TypeScript + React.JS

Install:

```bash
pnpm add -D -E eslint eslint-plugin-no-eslint-disable @typescript-eslint/parser @typescript-eslint/eslint-plugin
touch .eslintrc
echo "{\n\t\"extends\":\"@syxdaybreak/eslint-config\"\n}\n" > .eslintrc
```

Preview of `.eslintrc`

```json
// .eslintrc
{
   "extends": "@syxdaybreak/eslint-config/with-react"
}
```

### TypeScript

Install:

```bash
pnpm add -D -E eslint eslint-plugin-no-eslint-disable eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
touch .eslintrc
echo "{\n\t\"extends\":\"@syxdaybreak/eslint-config\"\n}\n" > .eslintrc
```

Preview of `.eslintrc`

```json
// .eslintrc
{
   "extends": "@syxdaybreak/eslint-config"
}
```
