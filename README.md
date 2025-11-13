# Lapka UI

Lapka UI is a lightweight and customizable component library for Vue.js, built with TypeScript and SCSS. It provides a set of essential UI components that can be easily integrated into any Vue project.

## Table of Contents

- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
  - [ButtonBase](#buttonbase)
  - [InputText](#inputtext)
  - [LinkBase](#linkbase)
  - [LinkRouter](#linkrouter)
  - [SvgIcon](#svgicon)
  - [TooltipBase](#tooltipbase)
- [Styling](#styling)
  - [SCSS Variables](#scss-variables)
  - [Mixins](#mixins)
- [Contributing](#contributing)
- [License](#license)

## Usage

To use a component from Lapka UI, import it into your Vue component and register it. You also need to import the main stylesheet.

```vue
<template>
  <ButtonBase color="accent" @click="handleClick">Click Me</ButtonBase>
</template>

<script setup>
import { ButtonBase } from '@/ui';
import '@/ui/style.css';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Project Structure

The project is organized as follows:

```
ui/
├── components/      # Vue components
├── fonts/           # Fonts
├── styles/          # SCSS stylesheets
│   ├── mixins/      # SCSS mixins
│   ├── _variables.scss # SCSS variables
│   ├── adaptive.scss   # Adaptive styles
│   └── all.scss        # Main stylesheet
├── types/           # TypeScript types
├── entry.ts         # Main entry point for the library
├── index.ts         # Module exports
└── style.scss       # Main style file
```

## Components

Here is a list of the available components with their props and events.

### ButtonBase

A flexible button component.

**Props**

| Prop      | Type                                                              | Default       | Description                               |
| --------- | ----------------------------------------------------------------- | ------------- | ----------------------------------------- |
| `color`   | `"white"`, `"white-accent"`, `"black"`, `"black-accent"`, `"accent"`, `"accent-alt"` | `"white"`     | The color theme of the button.            |
| `text`    | `Typography`                                                      | `"b-4"`       | The typography style of the button text.  |
| `type`    | `"button"`, `"reset"`, `"submit"`                                 | `"button"`    | The native `type` attribute of the button. |
| `outline` | `boolean`                                                         | `false`       | Whether to display the button as an outline. |

**Events**

| Event   | Payload      | Description                               |
| ------- | ------------ | ----------------------------------------- |
| `click` | `MouseEvent` | Emitted when the button is clicked.       |

### InputText

A styled text input component.

**Props**

| Prop         | Type                                                                 | Default  | Description                                  |
| ------------ | -------------------------------------------------------------------- | -------- | -------------------------------------------- |
| `color`      | `"white"`, `"black"`                                                 | `"white"`| The color theme of the input.                |
| `text`       | `Typography`                                                         | `"b-4"`  | The typography style of the input text.      |
| `type`       | `"text"`, `"password"`, `"email"`, `"tel"`, `"number"`, `"url"`, `"search"` | `"text"` | The native `type` attribute of the input.    |
| `outline`    | `boolean`                                                            | `false`  | Whether to display the input as an outline.  |
| `id`         | `string`                                                             | `''`     | The `id` of the input.                       |
| `required`   | `boolean`                                                            | `false`  | Whether the input is required.               |
| `pattern`    | `string`                                                             | `''`     | The regex pattern for the input.             |
| `name`       | `string`                                                             | `''`     | The `name` of the input.                     |
| `modelValue` | `string`, `number`                                                   | `''`     | The value of the input (for `v-model`).      |

**Events**

| Event               | Payload          | Description                                  |
| ------------------- | ---------------- | -------------------------------------------- |
| `update:modelValue` | `string`, `number` | Emitted when the input value changes.        |
| `blur`              | `Event`          | Emitted when the input loses focus.          |
| `focus`             | `Event`          | Emitted when the input gains focus.          |
| `keydown`           | `KeyboardEvent`  | Emitted when a key is pressed in the input.  |

### LinkBase

A standard `<a>` tag with styling.

**Props**

| Prop     | Type                                                              | Default   | Description                               |
| -------- | ----------------------------------------------------------------- | --------- | ----------------------------------------- |
| `color`  | `"white"`, `"white-accent"`, `"black"`, `"black-accent"`, `"accent"`, `"accent-alt"` | `"white"` | The color theme of the link.              |
| `text`   | `Typography`                                                      | `"b-4"`   | The typography style of the link text.    |
| `href`   | `string`                                                          |           | The URL the link points to.               |
| `target` | `'_self'`, `'_blank'`, `'_parent'`, `'_top'`                       | `'_self'` | The `target` attribute of the link.       |

### LinkRouter

A `router-link` component for use with Vue Router.

**Props**

| Prop     | Type                                                              | Default   | Description                               |
| -------- | ----------------------------------------------------------------- | --------- | ----------------------------------------- |
| `color`  | `"white"`, `"white-accent"`, `"black"`, `"black-accent"`, `"accent"`, `"accent-alt"` | `"white"` | The color theme of the link.              |
| `text`   | `Typography`                                                      | `"b-4"`   | The typography style of the link text.    |
| `href`   | `string`                                                          |           | The path for the router link.             |
| `target` | `'_self'`, `'_blank'`, `'_parent'`, `'_top'`                       | `'_self'` | The `target` attribute of the link.       |

### SvgIcon

A component for displaying SVG icons.

**Props**

| Prop   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| `name` | `string` | The name of the SVG file to display.      |

### TooltipBase

A component for displaying a tooltip.

**Props**

| Prop    | Type                                                                 | Default   | Description                               |
| ------- | -------------------------------------------------------------------- | --------- | ----------------------------------------- |
| `color` | `"white"`, `"black"`, `"accent"`, `"accent-alt"`, `"success"`, `"warn"`, `"error"`, `"info"` | `"white"` | The color theme of the tooltip.           |
| `side`  | `"top"`, `"bottom"`, `"left"`, `"right"`                             | `"top"`   | The position of the tooltip.              |

## Styling

The project uses SCSS for styling. The main stylesheet is `ui/style.scss`, which imports all other necessary style files.

### SCSS Variables

Global SCSS variables are defined in `ui/styles/_variables.scss`. These include colors, fonts, and other theme-related values.

### Mixins

A collection of useful SCSS mixins is available in the `ui/styles/mixins/` directory. These can be used for common styling patterns like flexbox, grid, and spacing.

## Contributing

Contributions are welcome! If you have a feature request or a bug to report, please open an issue. If you would like to contribute code, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.