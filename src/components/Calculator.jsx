import React, { useState } from 'react'
import './style.css'

export function Calculator() {
    const [result, setResult] = useState(0)
    const [oldresult, setOldResult] = useState(0)
    const [operator, setOperator] = useState()

    function inputNumber(e) {

        let input = e.target.value

        if(result === 0) {
            setResult(input)
        }
        else {
            setResult(result + input)
        }
    }

    function allClean() {
        setResult(0)
    }

    function clean() {
        if(result.length === 1) {
            setResult(0)
        }
        else {
            setResult(result.substring(0, result.length - 1))
        }
    }

    function porcentage() {
        setResult(result / 100)
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value
        setOperator(operatorInput)
        setOldResult(result)
        setResult(0)
    }

    function calculate() {
        if(operator === "/") {
            setResult(oldresult / result)
        }
        else if(operator === "*") {
            setResult(oldresult * result)
        }
        else if(operator === "+") {
            setResult(Number(oldresult) + Number(result))
            console.log(operator)
        }
        else if(operator === "-") {
            setResult(oldresult - result)
        }
    }

    return (
        <div className="calculator-container">
            <h1 className="result-painel">{result}</h1>
            <button className="all-clear" onClick={allClean}>AC</button>
            <button className="all-clear" onClick={clean}>C</button>
            <button className="operators" onClick={porcentage}>%</button>
            <button className="operators" onClick={operatorHandler} value="/">/</button>
            <button onClick={inputNumber} value={7}>7</button>
            <button onClick={inputNumber} value={8}>8</button>
            <button onClick={inputNumber} value={9}>9</button>
            <button className="operators" onClick={operatorHandler} value="*">X</button>
            <button onClick={inputNumber} value={4}>4</button>
            <button onClick={inputNumber} value={5}>5</button>
            <button onClick={inputNumber} value={6}>6</button>
            <button className="operators" onClick={operatorHandler} value="-">-</button>
            <button onClick={inputNumber} value={1}>1</button>
            <button onClick={inputNumber} value={2}>2</button>
            <button onClick={inputNumber} value={3}>3</button>
            <button className="operators" onClick={operatorHandler} value="+">+</button>
            <button onClick={inputNumber} value={0}>0</button>
            <button onClick={inputNumber} value={`.`}>.</button> 
            <button className="equals-operator" onClick={calculate}>=</button> 
        </div>
    )
}