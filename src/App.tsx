import { ElementB, Table } from './components';
import { TableContextProvider } from './context';
import { MainLayout } from './layout';

function App() {
  return (
    <MainLayout>
      <ElementB />
      <hr />
      <TableContextProvider>
        <Table />
      </TableContextProvider>
    </MainLayout>
  );
}

export default App;
