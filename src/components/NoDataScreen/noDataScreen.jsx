import imgNoData from '../../assets/noData.png';


const NoDataScreen = () => {
    return (
        <div className='text-center'>
            <div className="flex justify-center items-center mt-[70px]">
                <img src={imgNoData} alt='no-data' className='w-[200px] h-[200px] block'/>
            </div>
            <div className='text-blue-500 text-[40px] font-semibold'>Data Not Found</div>
        </div>
    );
}   

export default NoDataScreen;