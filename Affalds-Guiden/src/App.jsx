import './Global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from './Layout/Main';
import { Homepage } from './Pages/Homepage';
import { Sorting } from './Pages/Sorting';
import { RecyclingStations } from './Pages/RecyclingStations';
import { OrderContainer } from './Pages/OrderContainer';
import { Login } from './Pages/Login';
function App() {

  return (
    <>
 <BrowserRouter> {/* Route containeren der wrapper de forskellige ruter */}
        <Routes>{/* Top level component der lytter på hvad der er i url'en */}
          <Route path="/" element={<MainLayout title='Homepage' />}>{/* selve ruten */}
            {/* De to tomme paths=("/") er en nødvendighed ellers bliver det første man ser en blank outlet */}
            <Route path="/" element={<Homepage title="Homepage" />} />
            <Route path="/homepage" element={<Homepage title="Homepage" />} />
            <Route path="/sorting" index element={<Sorting title='Sorting' />} />
            <Route path="/recyclingstations" index element={<RecyclingStations title='Recycling stations' />} />
            <Route path="/ordercontainer" index element={<OrderContainer title='Order Container' />} />
            <Route path="/login" index element={<Login title='Login' />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
