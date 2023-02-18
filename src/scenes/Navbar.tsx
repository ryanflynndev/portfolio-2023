import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }: any) => {
  const lowerCasePage = page.toLowerCase();
  const yellowOrWhite = selectedPage === lowerCasePage ? 'text-yellow' : 'text-white';
  return (
    <AnchorLink 
      className={`${yellowOrWhite}
        hover:text-yellow`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ selectedPage, setSelectedPage }: any) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  console.log(isAboveSmallScreens);
  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className="font-inter text-3xl font-bold">RF</h4>

        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 font-inter text-sm font-semibold'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Testimonials'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
        <button
          className='rounded-full bg-red p-2'
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt='menu-icon' src='../assets/menu-icon.svg' />
        </button>
        )}

      { !isAboveSmallScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt='close-icon' src='../assets/close-icon.svg' />
            </button>
          </div>

        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
        <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Testimonials'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
        </div>
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;