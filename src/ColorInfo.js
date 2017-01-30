import styled from 'styled-components';

const ColorInfo = styled.div`
  display: flex;
  flex-direction: ${props => props.lines ? 'row' : 'column'};

  span {
    margin-right: ${props => props.lines ? 10 : 0}px;
  }
`;
ColorInfo.displayName = 'ColorInfo';

export default ColorInfo;
