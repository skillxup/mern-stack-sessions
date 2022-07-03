import './App.css';

let spanStyle = {
  color: '#2ade3c', 
  float: 'right', 
  textDecoration: 'underline', 
  lineHeight: '1.5rem', 
  fontWeight: 'bold'
};

function App() {
  return(
    <div>
      <h4>A Template for Killer Website Content</h4>

      <p>Over the years of developing websites for clients, I’ve learned that the age-old adage, <span style={spanStyle}> “If you want it done right, you gotta do it yourself,” </span> can be a two-way street.</p>

      <p>Of course, there are companies out there that have great web writers internally, but most don’t. And the thought of a company turning a great website content strategy <span style={{color: "#f3de2a", backgroundColor: '#fedece'}}> (that we slaved over) </span> into an ineffective “brochure site” gives me heartburn. But sometimes you have to pick your battles.</p>
    </div>
  );
}

export default App;