export default function GreetingCard({ name }) {
  const cardStyle = {
    padding: '20px',
    margin: '10px auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    textAlign: 'center',
    backgroundColor: '#1100ffff',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}! Welcome to React.</h2>
    </div>
  );
}
