# pomo-lite

A minimalist pomodoro timer for web and mobile. Made for the sole purpose of me messing with expo, next, and specifically a monorepo of the two.

## web

![image](https://user-images.githubusercontent.com/17317792/103393909-431f4b00-4b60-11eb-89af-1a7d38028867.png)

## mobile

![image](https://user-images.githubusercontent.com/17317792/103393988-ce004580-4b60-11eb-8f44-b2a2bdd225ae.png)

# references

- [expo in yarn workspaces](https://medium.com/@mauriciord/how-to-insert-an-expo-project-in-a-monorepo-9005ee763c7e)
- trouble shooting:
  - delete node_modules everywhere, then run `yarn`
  - make sure the [version of react is the same across the whole workspace](https://github.com/expo/expo/issues/6287#issuecomment-612191455). (in `packages/app` and `packages/web`)
- when a component's key changes, react will [create a new instance](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) rather than reuse the old one.
