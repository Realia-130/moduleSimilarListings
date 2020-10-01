import React from 'react';


const ThumbnailItem = (props) => {
  const { photo } = props;
  const { currentPhoto } = props;
  if (photo === currentPhoto) {
    return (
      <ActiveListItem>
        <ListButton>
          <ListImg src={photo} />
        </ListButton>
      </ActiveListItem>
    );
  }
  return (
    <ListItem>
      <ListButton>
        <ListImg src={photo} />
      </ListButton>
    </ListItem>
  );
};

export default ThumbnailItem;
