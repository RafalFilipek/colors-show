import styled from 'styled-components';

const Boxes = styled.div`
  display: flex;
  flex-direction: ${props => props.lines ? 'column' : 'row'};
  flex: 1;
`;
Boxes.displayName = 'Boxes';

export default Boxes;
