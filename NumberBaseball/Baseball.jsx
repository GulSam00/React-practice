import React, { useRef, useState, memo, Component, createRef } from "react";
import Try from "./Try.js";

function getNumbers() {
  //숫자 4개를 랜덤하게
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const selected = numberList.splice(
      Math.floor(Math.random() * (9 - i)),
      1
    )[0];
    array.push(selected);
  }
  console.log(array);
  return array;
}

/*
const Baseball = memo(() => {

  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(answer.join('') + ' ' + value);
    if (answer.join('') === value)
    {
      setResult("홈런!");
      setTries((prevTries) => { return [...prevTries, {try : value, result : "홈런!"}] });
      setValue();
      alert("홈런!");
      alert("게임 재시작");
      setResult("");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    }
    else
    {
      const answerArray = value.split('').map((e)=>parseInt(e));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        alert(`실패! 정답은 ${answerArray.join('')}입니다.`);
        alert("게임 재시작");
      setResult("");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      } 
      else {
        for (let i = 0; i < 4; i++)
        {
          if (answerArray[i] === answer[i])
            strike++;
          else if (answer.includes(answerArray[i]))
            ball++;
        }
        setResult(`${strike}스크라이크 ${ball}볼`);
        setTries((prevTries) => {
          return [...prevTries, {try : value, result : `${strike}스크라이크 ${ball}볼`}]});
        setValue("");
      };  
    };
    inputEl.current.focus();
  };

  const onChangeInput = (e) => {
      setValue(e.target.value);
  };


  return (
    <>
    <h1>숫자야구</h1>
    <form onSubmit={onSubmitForm}>
    <input ref={inputEl} maxLength={4} value={value} onChange={onChangeInput}/>
    </form>
    <div>시도 : {tries.length}</div>
    <div>결과 : {result}</div>
    <ul>
    {tries.map((v, i) => {return(<Try key={i} tryInfo={v}/>)})}
    </ul>
    </>
  )

})
*/
class Baseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.answer.join("") + " " + this.state.value);
    if (this.state.answer.join("") === this.state.value) {
      this.setState((prevState) => {
        return {
          result: "홈런!",
          tries: [
            ...this.state.tries,
            { try: this.state.value, result: "홈런!" },
          ],
          value: "",
        };
      });
      alert("홈런!");
      alert("게임 재시작");
      this.setState({
        result: "",
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split("").map((e) => parseInt(e));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `실패! 정답은 ${answerArray.join("")}입니다.`,
        });
        alert("게임 재시작");
        this.setState({
          result: "",
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) strike++;
          else if (this.state.answer.includes(answerArray[i])) ball++;
        }
        this.setState((prevState) => {
          return {
            result: `${strike}스크라이크 ${ball}볼`,
            tries: [
              ...this.state.tries,
              {
                try: this.state.value,
                result: `${strike}스크라이크 ${ball}볼`,
              },
            ],
            value: "",
          };
        });
      }
      this.inputRef.current.focus();
    }
  };
  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  inputRef = createRef();

  render() {
    const { tries, value } = this.state;
    return (
      <>
        <h1>숫자야구</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            maxLength={4}
            value={value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return <Try key={i} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default Baseball;
