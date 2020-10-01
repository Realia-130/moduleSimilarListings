import React from 'react';



const Image = (props) => {

  return (
    <Grid onClick={props.onClick}>
      <MainImage>
        <Img src={props.images[0].imageUrl[0]} />
      </MainImage>
      <GridImage2>
        <Img src={props.images[0].imageUrl[1]} />
      </GridImage2>
      <GridImage3>
        <Img src={props.images[0].imageUrl[2]} />
      </GridImage3>
      <GridImage4>
        <Img src={props.images[0].imageUrl[3]} />
      </GridImage4>
      <GridImage5>
        <Img src={props.images[0].imageUrl[4]} />
      </GridImage5>
    </Grid>
  );
};

export default Image;
