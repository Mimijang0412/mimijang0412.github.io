import React from 'react';
import Image from 'next/image';

const Modal = ({
	content,
	targetModalId,
	modalId,
	handleClick,
	handleClose,
	showProp,
	children,
}) => {
	return (
		<div
			id={`modal-${modalId}`}
			className={`${
				showProp && modalId == targetModalId ? 'block' : 'hidden'
			} modal fixed z-[1900] top-0 bottom-0 left-0 right-0 w-full h-full bg-opacity-60 bg-black`}
		>
			<div className='modal-main fixed z-[2000] bg-black w-full h-[100vh] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
				<div className='relative w-full h-full flex justify-center items-center flex-col sm:flex-row'>
					<h1 className='absolute top-[50px] text-lg md:text-2xl text-center text-white font-bolded'>
						{content && content.name}
					</h1>
					<button
						type='button'
						onClick={handleClose}
						className='absolute top-[30px] right-[40px] w-[30px] h-[30px] text-4xl lowercase text-white hover:opacity-80'
					>
						<span className='absolute top-0 w-[2px] h-[30px] bg-white rotate-45'></span>
						<span className='absolute top-0 w-[2px] h-[30px] bg-white -rotate-45'></span>
					</button>
					{/* laptop */}
					<div className='sm:-mr-[50px] lg:mr-0'>
						<div className='relative w-[340px] h-[220px] sm:w-[550px] sm:h-[330px] lg:w-[1000px] lg:h-[600px]'>
							<Image
								src='/images/laptop.png'
								// width={500}
								// height={300}
								layout='fill'
								alt='laptop'
								className='z-10'
								loading='eager'
							/>
							<div className='absolute left-[50px] sm:left-[80px] lg:left-[145px] top-[30px] sm:top-[45px] lg:top-[80px] max-h-[155px] sm:max-h-[235px] lg:max-h-[425px] overflow-scroll'>
								<div
									className={`relative w-[235px] h-[550px] sm:w-[380px] lg:w-[692px] sm:h-[700px] lg:h-[1000px]`}
								>
									<Image
										src={content && content.imageSrc}
										layout='fill'
										// width={350}
										// height={400}
										alt=''
										className='z-20'
										loading='eager'
									/>
								</div>
							</div>
						</div>
					</div>
					{/* phone */}
					<div className='sm:-ml-[100px] sm:mt-[100px] lg:-ml-[250px] lg:mt-[100px]'>
						<div className='relative w-[200px] h-[300px] lg:w-[400px] lg:h-[600px] z-30'>
							<Image
								src='/images/mobile.png'
								layout='fill'
								// width={200}
								// height={300}
								alt='mobile phone'
								className='z-20'
								loading='eager'
							/>
							<div className='absolute left-[35px] lg:left-[70px] top-[5px] lg:top-[10px] max-h-[275px] lg:max-h-[550px] overflow-scroll rounded-2xl lg:rounded-[27px]'>
								<div
									className={`relative w-[130px] h-[1000px] lg:w-[260px] lg:h-[3000px]`}
								>
									<Image
										src={content && content.imageSrcMbl}
										layout='fill'
										// width={130}
										// height={500}
										alt=''
										className='z-20'
										loading='eager'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
