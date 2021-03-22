import Menu from '../icons/menu';

const Navigation = () => {
    return (
        <div className='h-20 px-8 flex justify-between items-center text-black z-20 absolute w-full top-0 left-0'>
            <h1 className='text-2xl tracking-wide font-semibold'>
                Intersections .
            </h1>
            <div className='text-black'>
                <Menu />
            </div>
        </div>
    );
};

export default Navigation;
