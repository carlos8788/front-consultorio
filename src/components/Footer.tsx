import { Facebook, Twitter } from "./icons/Icons"

const Footer = () => {

  const footerNavs = [
    {
      href: '#',
      name: 'About'
    },
    {
      href: '#',
      name: 'Blog'
    },
    {
      href: '#',
      name: 'Team'
    },
    {
      href: '#',
      name: 'Careers'
    },

    {
      href: '#',
      name: 'Support'
    }
  ]

  return (
    <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto sm:px-8 flex flex-col justify-center items-center">
      <div className="max-w-lg sm:mx-auto sm:text-center flex flex-col items-center justify-center ">
        <img src="logo.png" className="w-24 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {
          footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800">
              <a key={idx} href={item.href}>
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
      <div className="mt-8 items-center justify-around gap-40 sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Float UI All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0 flex justify-center">
          <ul className="flex items-center space-x-4">
            <li className="w-16 h-16  border rounded-full flex items-center justify-center">
              <a href="#">
                <Twitter/>
              </a>
            </li>

            <li className="w-16 h-16  border rounded-full flex items-center justify-center">
              <a href="#">
                <Facebook/>
              </a>
            </li>

            <li className="w-16 h-16 border rounded-full flex items-center justify-center">
              <a href="#">
                <img src="/instagram.svg" alt="" width={48} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer