import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

export const SkeletonBlock = styled.div`
  position: absolute;
  background: linear-gradient(
    90deg,
    #c1cddc -6.32%,
    #e9eef7 46.75%,
    #c1cddc 106.46%
  );
  background-size: 200px 100%;
  border-radius: ${({ $radius }) => $radius || '18px'};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  animation: ${shimmer} 1.5s infinite linear;
`;

export const SkeletonDots = styled.div`
  position: absolute;
  width: 18px;
  height: 4px;
  top: 23px;
  left: 185px;
  background: linear-gradient(
    90deg,
    #c1cddc -6.32%,
    #e9eef7 46.75%,
    #c1cddc 106.46%
  );
  background-size: 200px 100%;
  border-radius: 2px;
  animation: ${shimmer} 1.5s infinite linear;
`;
