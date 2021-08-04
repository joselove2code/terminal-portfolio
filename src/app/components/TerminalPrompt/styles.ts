import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.span`
  margin-right: 5px;

  ::selection, b::selection {
    color: var(--backgroundColor);
    background: var(--green);
  }
`;

export const Char = styled.span`
  position: relative;
  line-height: var(--lineHeight);

  ::selection {
    color: var(--backgroundColor);
    background: var(--green);
  }
  `;

export const Caret = styled.span`
  left: 0;
  position: absolute;
  color: var(--backgroundColor);
  line-height: var(--lineHeight);
  background-color: var(--green);
  animation: blink 1s steps(5, start) infinite;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;