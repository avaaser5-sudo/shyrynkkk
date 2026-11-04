import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

      <p style={{
        color: 'black',
        width: '400px',
        height: '400px',
        background: '#00FF7F',
        padding: '15px'
      }}>
        • Albert Einstein: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking."

        • Ralph Waldo Emerson: "Our greatest glory is not in never failing, but in rising up every time we fail."
      </p>

      <p style={{
        color: 'black',
        width: '400px',
        height: '400px',
        background: '#00FFFF',
        padding: '15px'
      }}>
        • Steve Jobs: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma."

        • Nelson Mandela: "It always seems impossible until it's done."
      </p>

      <p style={{
        color: 'black',
        width: '400px',
        height: '400px',
        background: 'yellow',
        padding: '15px'
      }}>
        • Walt Disney: "All our dreams can come true if we have the courage to pursue them."

        • Thomas Edison: "Genius is one percent inspiration and ninety-nine percent perspiration."
      </p>

    </div>
  )
}

export default App;