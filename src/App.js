import './css/tailwind.css';
import { Button } from 'flowbite-react'
import { HiShoppingCart } from 'flowbite-react'
import { HiOutlineArrowRight } from 'flowbite-react'


function App() {
  return (
    <>
      <section className='main-section'></section>
      <div className="flex flex-wrap items-center gap-2">
        <Button>
          <HiShoppingCart className="mr-2 h-5 w-5" />
          Buy now
        </Button>
        <Button>
          Choose plan
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </>
  );
}

export default App;
