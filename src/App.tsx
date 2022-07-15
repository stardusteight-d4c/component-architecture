import { FilterButton } from './components/FilterButton'
import { SmartphoneItem } from './components/SmartphoneItem'
import { useSmartphones } from './hooks/useSmartphones'

function App() {
  const { setManufactur, setStorage, smartphones } = useSmartphones()
  return (
    <div className="">
      <section className="max-w-5xl py-24 m-auto mt-12 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Celulares a Preço de Fábrica
        </h1>

        {/* <pre>{JSON.stringify({ manufacturer, storage }, null, 2)}</pre> */}

        <div className="flex w-full mt-12 space-x-6">
          <div className="flex flex-col items-center w-full p-6 shadow">
            <label className="text-lg font-bold">Armazenamento</label>
            <div className="flex mt-6 space-x-2">
              <FilterButton onClick={() => setStorage('')}>Todos</FilterButton>
              <FilterButton onClick={() => setStorage('64GB')}>
                64GB
              </FilterButton>
              <FilterButton onClick={() => setStorage('128GB')}>
                128GB
              </FilterButton>
              <FilterButton onClick={() => setStorage('256GB')}>
                256GB
              </FilterButton>
            </div>
          </div>

          <div className="flex flex-col items-center w-full p-6 shadow">
            <label className="text-lg font-bold">Marca</label>
            <div className="flex mt-6 space-x-2">
              <FilterButton onClick={() => setManufactur('')}>
                Todas
              </FilterButton>
              <FilterButton onClick={() => setManufactur('Apple')}>
                Apple
              </FilterButton>
              <FilterButton onClick={() => setManufactur('Samsung')}>
                Samsung
              </FilterButton>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around mt-12 space-y-12">
          {smartphones?.map((smartphone) => (
            <SmartphoneItem key={smartphone.id} data={smartphone} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
