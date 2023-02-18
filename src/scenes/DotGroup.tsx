import AnchorLink from 'react-anchor-link-smooth-scroll';

const Dot = ({ page, selectedPage, setSelectedPage }: any) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
  before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
  before:top-[-50%]`;
  const yellowOrGrey = selectedPage === page ? selectedStyles : 'bg-dark-grey';
  return (
    <AnchorLink 
      className={`${yellowOrGrey}
        w-3 h-3 rounded-full`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    />
  );
}

const DotGroup = ({ selectedPage, setSelectedPage }: any) => {
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      <Dot page={'home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Dot page={'skills'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Dot page={'projects'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Dot page={'testimonials'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Dot page={'contact'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default DotGroup;