import { useState } from "react";
import SliderButton from "./SliderButton";
export default function Slider() {

  const images = [
    { img: "./Images/1.jpg", alt: 'Petite ru des p et des m', Legend: "Mur taggé" },
    { img: "./Images/2.jpg", alt: 'Une route sur un pont a une  en a plan', Legend: "Autoroute pleine" },
    { img: "./Images/3.jpg", alt: 'Ku Building, un  très col', Legend: "Immeumble coloré" },
    { img: "./Images/4.jpg", alt: 'Un im de n des ', Legend: "Immeuble eclairé" },
    { img: "./Images/5.jpg", alt: 'Une rue de grande v de très , vue  le dernier  d\'un immeuble', Legend: "Ville futuriste" },
    { img: "./Images/6.jpg", alt: 'La tour Eiffel de Paris', Legend: "Paris by night" }
  ]

  const [numberImage, setNumberImage] = useState(0);
  const [EnabledButton, setEnabledButton] = useState(true);

  const sliderRightButton = () => {
    if (EnabledButton === true) {
      setEnabledButton(!true)
      setTimeout(() => {
        setNumberImage(numberImage + 1);
      if (numberImage === images.length - 1) {
        setNumberImage(0)
      }
      }, 1500);
      setTimeout(() => {
        setEnabledButton(true)
      }, 1500);
    }
    
  }

  const sliderLeftButton = () => {
    if (EnabledButton === true){
      setEnabledButton(!true)
      setTimeout(() => {
        if (numberImage === 0) {
          setNumberImage(images.length - 1)
        } else {
          setNumberImage(numberImage - 1)
        }
      }, 1500);
      
      setTimeout(() => {
        setEnabledButton(true)
      }, 1500);
    }
    
  }

  const ButtonRight = "ButtonRight"

  return (
    <main>
      <h1>Le Slider</h1>
      <div>
        <SliderButton onClickButton={sliderLeftButton} Direction={"DirectionButton"}></SliderButton>
        <figure>
          <img src={images[numberImage].img} alt={images[numberImage].alt} />
          <figcaption>{images[numberImage].Legend}</figcaption>
        </figure>
        <SliderButton className={ButtonRight} onClickButton={sliderRightButton}></SliderButton>
      </div>
    </main>
  )
}