import { BrowserRouter } from "react-router";
import DataFetchingRoutes from "./pages/data-fetching/routes";
import './index.css'

export function App() {

  return (
    <main className="min-h-dvh min-w-dvh bg-gray-200">
          <BrowserRouter>
        {/* Aquí van las rutas */}
        <DataFetchingRoutes/>
    </BrowserRouter>
    </main>
  );
}


// CTRL + Espacio para autocompletar