import { CardWrapper } from '../Card/Card.styled';
import { SkeletonBlock, SkeletonDots } from './SkeletonCard.styled';

const SkeletonCard = () => (
  <CardWrapper style={{ position: 'relative' }}>
    <SkeletonBlock $width='82px' $height='20px' $top='15px' $left='13px' />
    <SkeletonBlock $width='113px' $height='13px' $top='50px' $left='13px' />
    <SkeletonBlock $width='58px' $height='13px' $top='98px' $left='13px' />
    <SkeletonDots />
  </CardWrapper>
);

export default SkeletonCard;