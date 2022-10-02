# vue-characters
<img src="doge.jpg" width="320" alt="vue-characters doge meme" />

Make your vue application fully component-based.

## Supported Languages
* English
* Whitespace (\&nbsp;)

## Installation

```shell
npm install https://github.com/nemo9l/vue-characters
```

## Usage

```javascript
<template>
    <L /><O lower="true" /><R lower="true" /><E lower="true" /><M lower="true" />
</template>

<script>
    import { L, O, R, E, M } from 'vue-characters';
    export default {
        name: 'DogeGazua',
        components: {
            L, O, R, E, M
        }
    };
</script>
```

## Props

### lower
`lower="true"` makes a character to lower case.
```html
<L lower="true" />
```

## Support Us

Don't support us. Support Ukraine.
