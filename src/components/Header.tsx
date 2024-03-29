import { useState, } from "react"
import { Link } from "react-router-dom"

const ProfileDropDown = ({classTw}) => {

  const [state, setState] = useState(false)

  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
    { title: "Log out", path: "javascript:void(0)" },
  ]



  return (
    <div className={`relative ${classTw}`}>
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src="./hospital.svg"
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">Micheal John</span>
          <span className="block text-sm text-gray-500">john@gmail.com</span>
        </div>
      </div>
      <ul 
      className={`bg-white top-12 right-0 mt-5 space-y-5  lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
        {
          navigation.map((item, idx) => (
            <li>
              <Link key={idx} className="block text-gray-600 bg-white lg:hover:bg-gray-50 lg:p-2.5" to={item.path}>
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const Header = () => {

  const [menuState, setMenuState] = useState(false)

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ]
  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link to={'/'}>
            <img
              src="logo.png"
              width={70}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className={`bg-white absolute  w-full top-16 left-0 p-2 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {
                navigation.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-gray-900">
                    <Link to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <ProfileDropDown
              classTw="mt-5 pt-5 border-t lg:hidden"
            />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">

            <ProfileDropDown
              classTw="hidden lg:block"
            />
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {
                menuState ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header