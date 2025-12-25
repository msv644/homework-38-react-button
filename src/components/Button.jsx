export default function Button(props) {
    const onButtonClick = props.onClickHandler;
    return <button onClick={onButtonClick}>{props.text}</button>
}