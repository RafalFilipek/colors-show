![](https://raw.githubusercontent.com/RafalFilipek/colors-show/master/logo.png)

---

[![Build Status](https://travis-ci.org/RafalFilipek/colors-show.svg?branch=master)](https://travis-ci.org/RafalFilipek/colors-show)
[![Code Coverage](https://img.shields.io/codecov/c/github/RafalFilipek/colors-show/master.svg)](https://codecov.io/gh/RafalFilipek/colors-show)
[![Code Style](https://img.shields.io/badge/codestyle-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)

_Present your application colors with style._

### TL;DR; Demo

[**colors-show.now.sh**](https://colors-show.now.sh)


### Installation

```
yarn add colors-show

// or

npm install colors-show
```

### Usage

First, you have to import the component

```jsx
  import ColorsShow from 'colors-show';
```

Lets say, you have some color guides in your application:

```js
export const green = {
  Green: '#00a757',
  Dark_Green: '#00904b',
  Light_Green: '#05d073',
  Dimmed_Green: '#7fd3ab',
};

export const blue = {
  Blue: '#378cbe',
  Dark_Blue: '#367fa9',
  Light_Blue: '#4cade6',
  Dimmed_Blue: '#9bc5de',
};
```

Simplest example:

```jsx
<ColorsShow colors={green} />
```

You're all set!  Now let's see how can you customize this component:


### Props

**`colors`** - `object` / **required** - Map of colors where `key` is a name and value is a color in CSS one of css formats.

**`width`** - `number` / `100` - width of the box.

**`height`** - `number` / `100` - height of the box.

**`space`** - `number` / `20` - space between boxes.

**`lines`** - `bool` / `false` - if you want lines insted of boxes.

**`stacked`**  - `bool` / `false` stacked boxed with hover effect.

**`name`** - `string` /  `""` - group name.

**`showNames`** - `bool` / `false` - you can turn it off to show only color codes.

**`containerClassName`**  - `string` /  `""` - additional class for container.

**`wrapperClassName`**  - `string` /  `""` - additional class for wrapper.

**`boxClassName`**  - `string` /  `""` - additional class for box.

**`colorInfoClassName`**  - `string` /  `""` - additional class for color info.

** `component`** - `React.Component` / `null` - custom Box component.

### Custom components

You can use your own component to presnt colors. You can extend `Box` component from `colors-show` or use your own.

```js
const Circle = styled(Box)`
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
```

In both cases component will get few props:

- **`width`**
- **`height`**
- **`space`**
- **`stacked`**
- **`className`**
- **`style`** = `{ backgroundColor: COLOR }`

### ClassNames

As you can see there is option to provide additional CSS classes for all elements. Lets look at component structure:

```
  <Container>                 // containerClassName
    <Name />                  // wrapperClassName
    <Boxes>
      <Box>                   // boxClassName
        <ColorInfo>           // colorInfoClassName
          <span>code</span>
          <span>name</span>
        </ColorInfo>
      </Box>
    </Boxes>
  </Container>
```
