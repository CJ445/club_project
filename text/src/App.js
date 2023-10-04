import './App.css';

function App() {
  const calculate = (operation) => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let result;

    switch (operation) {
      case 'add':
        result = n1 + n2;
        break;
      case 'sub':
        result = n1 - n2;
        break;
      case 'mul':
        result = n1 * n2;
        break;
      case 'div':
        result = n1 / n2;
        break;
      default:
        result = 'Invalid operation';
    }

    document.getElementById('p').innerHTML = result;
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <hr color="black" />
      <label style={{ fontSize: '30px' }}>Enter 1st no. </label>
      <input type="number" id="n1" />
      <br />
      <label style={{ fontSize: '30px' }}>Enter 2nd no. </label>
      <input type="number" id="n2" />
      <hr color="black" />
      <button onClick={() => calculate('add')}style={{
        backgroundColor : 'skyblue',
        borderRadius : '20px',
        fontSize : '30px'
       }}
      >+</button>
      <button onClick={() => calculate('sub')}style={{
        backgroundColor : 'skyblue',
        borderRadius : '20px',
        fontSize : '30px'
       }}>-</button>
      <button onClick={() => calculate('mul')}style={{
        backgroundColor : 'skyblue',
        borderRadius : '20px',
        fontSize : '30px'
       }}>*</button>
      <button onClick={() => calculate('div')}style={{
        backgroundColor : 'skyblue',
        borderRadius : '20px',
        fontSize : '30px'
       }}>/</button>
      <hr color="black" />
      <p style={{fontSize:'30px'}}><b>Ans:</b><span id="p"></span></p>
    </div>
  );
}

export default App;