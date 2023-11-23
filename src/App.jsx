import './App.css'
import Card from './components/Card'

function App() {
  return (
    <main className='min-h-screen bg-[hsl(30,38%,92%)] px-4 py-7 grid place-content-center'>
      <Card title="Gabrielle Essence Eau De Parfum" type="perfume" imgMobile="/img-mobile.jpg" imgDesktop="/img-desktop.jpg" text="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL." currentValue="149.99" pastValue="169.99" />
    </main>
  )
}

export default App
