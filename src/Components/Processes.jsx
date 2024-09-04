
import element from "/element.png"

const Processes = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-20'>
            <div className="mx-auto text-center py-8 mt-8   ">
                <img className='text-center mx-auto' src={element} alt="" />
                <h1 className='font-bold text-4xl mt-5 mb-8'>Our creative process.</h1>
                <p className='w-[412px] text-center mx-auto font-paprika'>We provide digital experience services to startups and small businesses.
                </p>
            </div>

            {/* Processes design items  */}

            <div className='flex justify-between items-center mt-8 ' >
                <div className="bg-[#EBF7E9] py-[24px] px-[80px] rounded-2xl mx-auto ">
                    <p> Step 1</p>
                    <h2 className='text-[30px] font-semibold'>Global SEO Research</h2>
                    <p className='w-[356px] text-[18px] font-paprika mt-5'>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
                <div className="">
                    <img className='w-[550px] rounded-2xl' src="https://www.sunmediamarketing.com/wp-content/uploads/2020/09/Basic-Guide-to-Keyword-Research-Sun-Media-Marketing-750x465-1.jpg" alt="" />
                </div>
            </div>
{/* two */}
            <div className='flex justify-between items-center mt-8 ' >
                <div className="">
                    <img className='w-[550px] rounded-2xl' src="https://inkbotdesign.com/wp-content/uploads/2022/11/what-is-digital-marketing-automation-1024x621.png" alt="" />
                </div>
                <div className="bg-[#D8EAFF] py-[24px] px-[50px] rounded-2xl mx-auto ">
                    <p> Step 2</p>
                    <h2 className='text-[30px] font-semibold'>Social media integration</h2>
                    <p className='w-[356px] text-[18px] font-paprika mt-5'>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
            </div>
            {/* three  */}
            <div className='flex justify-between items-center mt-8 ' >

                <div className="bg-[#FBF1EC] py-[24px] px-[50px] rounded-2xl mx-auto ">
                    <p> Step 3</p>
                    <h2 className='text-[30px] font-semibold'>Launching the Application</h2>
                    <p className='w-[356px] text-[18px] font-paprika mt-5'>Practical tools and features make it easier to build and manage your site.
                    </p>
                </div>
                <div className="">
                    <img className='w-[550px] rounded-2xl' src="https://inkbotdesign.com/wp-content/uploads/2022/11/what-is-digital-marketing-automation-1024x621.png" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Processes