// @flow

import React from 'react';

import Container from './Container';
import Name from './Name';
import Boxes from './Boxes';
import { Box, LineBox } from './Box';
import ColorInfo from './ColorInfo';

type Props = {
  colors: { [name: string]: string },
  component?: typeof React.Component,
  width?: number,
  height?: number,
  space?: number,
  stacked?: boolean,
  lines?: boolean,
  name?: string,
  containerClassName?: string,
  wrapperClassName?: string,
  nameClassName?: string,
  boxClassName?: string,
  colorInfoClassName: string,
  showNames: boolean,
};

type DefaultProps = {
  height: number,
  width: number,
  space: number,
  stacked: boolean,
  lines: boolean,
  name: string,
  containerClassName: string,
  wrapperClassName: string,
  nameClassName: string,
  boxClassName: string,
  colorInfoClassName: string,
  showNames: boolean,
};

type State = { stacked: ?boolean };

export default class ColorsShow extends React.PureComponent<DefaultProps, Props, State> {
  static displayName = 'ColorsShow';

  static defaultProps: DefaultProps = {
    height: 100,
    width: 100,
    space: 20,
    stacked: false,
    lines: false,
    name: '',
    containerClassName: '',
    wrapperClassName: '',
    nameClassName: '',
    boxClassName: '',
    colorInfoClassName: '',
    component: null,
    showNames: true,
  };

  state: State = { stacked: this.props.stacked };

  componentWillMount() {
    const { stacked, lines } = this.props;

    if (process.env.NODE_ENV !== 'production') {
      if (stacked && lines) {
        console.error('Please use only one `stacked` or `lines` prop.');
      }
    }
  }

  props: Props;

  toggleStacked = () => {
    if (this.props.stacked) {
      this.setState({ stacked: !this.state.stacked });
    }
  };

  render() {
    const {
      colors,
      component,
      width,
      height,
      space,
      name,
      lines,
      containerClassName,
      wrapperClassName,
      nameClassName,
      boxClassName,
      colorInfoClassName,
      showNames,
    } = this.props;

    const lineOrBox = lines ? LineBox : Box;
    const Component = component || lineOrBox;

    return (
      <Container
        onMouseEnter={this.toggleStacked}
        onMouseLeave={this.toggleStacked}
        className={containerClassName}
      >
        {name && <Name className={nameClassName}>{name}</Name>}
        <Boxes lines={lines} className={wrapperClassName}>
          {Object.keys(colors).map(colorName => (
            <Component
              key={colorName}
              width={width}
              height={height}
              space={space}
              stacked={this.state.stacked}
              className={boxClassName}
              style={{ backgroundColor: colors[colorName] }}
            >
              <ColorInfo lines={lines} className={colorInfoClassName}>
                <span>{colors[colorName]}</span>
                {showNames && <span>{colorName}</span>}
              </ColorInfo>
            </Component>
          ))}
        </Boxes>
      </Container>
    );
  }
}
