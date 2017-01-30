import styled from 'styled-components';

const BaseBox = styled.div`
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  font-size: 12px;
  margin-right: ${props => props.space}px;
  border-radius: 3px;
  transition: margin-left .2s ease-in-out;
`;
BaseBox.displayName = 'BaseBox';

export const LineBox = styled(BaseBox)`
  height: ${props => props.height}px;
  line-height: ${props => props.height}px;
  padding: 0 10px;
  margin-bottom: ${props => props.space}px;
  flex: 1;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
LineBox.displayName = 'LineBox';

export const Box = styled(BaseBox)`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 10px;
  margin-left: ${props => props.stacked ? (-props.width) * 0.8 : 0}px;

  &:last-of-type {
    margin-right: 0;
  }

  &:first-of-type {
    margin-left: 0;
  }
`;
Box.displayName = 'Box';

export default BaseBox;
