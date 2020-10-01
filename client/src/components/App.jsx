import React from 'react';
import Axios from 'axios';
import Image from './Image.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      hasLoaded: false,
      clickedGrid: false,
      clickedImg: null,

    };
    this.getAll = this.getAll.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    Axios.get('')
      .then((response) => {
        const ImgCollection = [];
        ImgCollection.push(response.data[0]);
        this.setState({
          images: ImgCollection,
          hasLoaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleGridClick(event) {
    const { clickedGrid } = this.state;
    this.setState({ clickedGrid: !clickedGrid });
    this.setState({ clickedImg: event.target });
    event.preventDefault();
  }

  render() {
    const { images } = this.state;
    const { hasLoaded } = this.state;
    const { clickedGrid } = this.state;
    const { clickedImg } = this.state;

    if (hasLoaded) {
      if (!clickedGrid) {
        return (<ImageGrid images={images} onClick={this.handleGridClick} />);
      }
      return (
        <Carousel
          currentImg={clickedImg}
          images={images}
          handleClick={this.handleGridClick}
        />
      );
    }
    return (<div />);
  }
}

export default App;