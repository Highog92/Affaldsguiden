import './Global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from './Layout/Main';
import { Homepage } from './Pages/Homepage';
import { Sorting } from './Pages/Sorting';
import { RecyclingStations } from './Pages/RecyclingStations';
import { OrderContainer } from './Pages/OrderContainer';
import { Login } from './Pages/Login';
import { SearchPage } from './Pages/SearchPage';
import { SortingDetailsPage } from './Pages/SortingDetailsPage';
import { SignUpPage } from './Pages/SignIn';
import { ErrorPage } from './Pages/ErrorPage';

function App() {

  return (
    <>
      <BrowserRouter> {/* Route containeren der wrapper de forskellige ruter */}
        <Routes>{/* Top level component der lytter på hvad der er i url'en */}
          <Route path="/" element={<MainLayout title='Homepage' />}>{/* selve ruten */}
            {/* De to tomme paths=("/") er en nødvendighed ellers bliver det første man ser en blank outlet */}
            <Route index element={<Homepage title="Homepage" />} />
            <Route path="/homepage" element={<Homepage title="Homepage" />} />



            <Route path="/recyclingstations" element={<RecyclingStations title='Recycling stations' />} />
            <Route path="/ordercontainer" element={<OrderContainer title='Order Container' />} />
            <Route path="/login" element={<Login title='Login' />} />
            <Route path="/signin" element={<SignUpPage title='Sign In' />} />

            <Route path="/searchpage/:searchWord" element={<SearchPage title={'Search word'} />} />
            <Route path="/searchpage" element={<SearchPage title={'Search page'} />} />

            {/* Dynamic Route */}
            <Route path="/sorting" element={<Sorting title='Sorting' />} />
            <Route path="/sorting/:sortingId" element={<SortingDetailsPage />} />
            
            <Route path="/*" element={<ErrorPage />} title="error" />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
