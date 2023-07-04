import { useState } from "react";
import './App.css'

const nick1 = "https://uproxx.com/wp-content/uploads/2022/04/con-air-nic-cage.jpg?w=1024&h=450&crop=1"
const nick2 = "https://i.cbc.ca/1.5963873.1616692705!/fileImage/httpImage/image.jpeg_gen/derivatives/original_780/face-off.jpeg"
const nick3 = "https://cdn.mos.cms.futurecdn.net/E5os5fWBcTLx9fwikK2WHj.jpg"

const images = [
  {
    title: "nick 1",
    image: "https://i.cbc.ca/1.5963873.1616692705!/fileImage/httpImage/image.jpeg_gen/derivatives/original_780/face-off.jpeg",
    description: "This is the first image of the slide"
  },
  {
    title: "nick 2",
    image: "https://uproxx.com/wp-content/uploads/2022/04/con-air-nic-cage.jpg?w=1024&h=450&crop=1",
    description: "This is the second image of the slide"
  },
  {
    title: "nick 3",
    image: "https://cdn.mos.cms.futurecdn.net/E5os5fWBcTLx9fwikK2WHj.jpg",
    description: "This is the third image of the slide"
  },
]
function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentImage = images[slideIndex];
  const isFirst = slideIndex === 0;
  const isLast = slideIndex === images.length - 1;

  const increment = () => {
      setSlideIndex(slideIndex + 1);
  }
  const decrement = () => {
      setSlideIndex(slideIndex - 1);
  }

  return (
    <>
      <div className="carousel">
        <div className="image-container">
          <img src={currentImage.image} alt="" />
          <h3>{currentImage.title}</h3>
          <p>{currentImage.description}</p>
        </div>
        <div className="controls">
          <button
            onClick={() => {
              decrement()
            }}
            disabled = {isFirst}
          >
            Previous
          </button>
          <button
            onClick={() => {
              increment()
            }}
            disabled={isLast}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default App
