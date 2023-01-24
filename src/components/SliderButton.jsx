
export default function SliderButton ({onClickButton, Direction}) {

    return (
        <button onClick={onClickButton}>{Direction === "DirectionButton" ? "<" : ">"}</button>
        );

}


