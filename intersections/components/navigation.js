import Menu from '../icons/menu';

const Navigation = () => {
    return (
        <div className='h-20 mx-8 flex justify-between items-center text-white'>
            <h1 className='text-2xl tracking-wider font-semibold'>
                Intersections .
            </h1>
            <div className='text-white'>
                <Menu />
            </div>
        </div>
    );
};

export default Navigation;
