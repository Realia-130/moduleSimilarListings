import React from 'react';
import ThumbnailItem from './ThumbnailItem.jsx';

// keeps order if images a
class ThumbnailSlider extends React.Component {
  render() {
    const { images, currentPhoto, transform } = this.props;
    const imageUrlList = { images }.images;
    const currentPhotoIndex = imageUrlList.indexOf(currentPhoto);
    if (currentPhotoIndex > 3) {
      return (
        <SliderContainer>
          <OuterContainer>
            <UnorderedListContainer>
              <ShiftedSlider transform={transform}>
                {imageUrlList.map((url) => {
                  return <ThumbnailItem photo={url} currentPhoto={currentPhoto} />;
                })}
              </ShiftedSlider>
            </UnorderedListContainer>
          </OuterContainer>
        </SliderContainer>
      );
    }
    return (
      <SliderContainer>
        <OuterContainer>
          <UnorderedListContainer>
            <UnorderedList>
              {imageUrlList.map((url) => {
                return <ThumbnailItem photo={url} currentPhoto={currentPhoto} />;
              })}
            </UnorderedList>
          </UnorderedListContainer>
        </OuterContainer>
      </SliderContainer>
    );
  }
}

export default ThumbnailSlider;