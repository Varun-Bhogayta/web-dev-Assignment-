
import { Button } from './ui/button';import { useState, useEffect } from 'react'
import { Menu, X} from 'lucide-react'
import { ModeToggle } from './mode-toggle';

const nevLinks = ["Dashboard", "Bonds", "Account"];
function Nevbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-between bg-background text-primary ">
      <div className="left-sec flex">

      {isMobile ? (
          <button onClick={toggleMenu} className="md:hidden pl-5">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (<></>)}
        
        <div className="logo text-3xl text font-bold p-5">Earninn</div>
        {isMobile ? (
          <></>
        ) : (<div className="nevlinks flex m-3 ">
          {nevLinks.map((link: string) => (<a href="#" key={link} className="flex items-center gap-2 p-2 hover:text-gray-500 underline rounded">{link}</a>))}
        </div>

        )}

        <div
          className={`fixed z-10 top-0 right-0 h-full w-64 bg-popover-foreground text-primary-foreground transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} title="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="nevlinks">
          
            {nevLinks.map((link: string) => (<a href="#" onClick={toggleMenu} key={link} className="flex items-center gap-2 p-2  hover:text-gray-500 rounded">{link}</a>))}
          
        </div>
        </div>

        {/* Overlay */}
        {
          isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
              onClick={toggleMenu}
            ></div>
          )
        }


      </div>
      <div className="right-sec flex-col justify-end">
        <ModeToggle/>
        <Button variant="link" className='m-5' >Logout {'>'}</Button>
      </div>
    </div>
  )
}

export default Nevbar





