import React from 'react';
import { FaCircleInfo } from "react-icons/fa6";


function Cards() {
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://warehouse-exchange-production.s3.amazonaws.com/facilities/facilityphoto/1f375139-b9e9-460f-8585-24a0f3f3ebfb.jpeg',
      title: '1514 - Hurst Warehouse',
      borderColor: 'border-green-500',
      location: false,
      tenantLaborAllowed: true,
      minSqFt: 2250,
      spaceAvailable: 1500,
      pricingStartsAt: '$0.83/ sq. ft',
      infoText: 'Pallet to Square Foot conversion based on standard 40"x48" pallet.'
    },
    {
        id: 2,
        imageUrl: 'https://warehouse-exchange-production.s3.amazonaws.com/facilities/facilityphoto/5e5780c3-60c6-4ac9-a96c-59c1088582af.png',
        title: '1644 - Grapevine Warehouse',
        borderColor: 'border-green-500',
        location: true,
        tenantLaborAllowed: true,
        minSqFt: 1000,
        spaceAvailable: 25000,
        pricingStartsAt: '$1.00/ sq. ft',
        infoText: 'Pallet to Square Foot conversion based on standard 40"x48" pallet.'
      },
      {
        id: 3,
        imageUrl: 'https://warehouse-exchange-production.s3.amazonaws.com/facilities/facilityphoto/36d1a068-81e5-4b2c-9fd0-4cc68b5ddbf3.jpg',
        title: 'Mesquite Warehouse',
        borderColor: 'border-red-500',
        location: false,
        tenantLaborAllowed: false,
        minSqFt: 2000,
        spaceAvailable: 13000,
        pricingStartsAt: '$1.00/ sq. ft',
        infoText: 'Pallet to Square Foot conversion based on standard 40"x48" pallet.'
      },
      {
        id: 4,
        imageUrl: 'https://warehouse-exchange-production.s3.amazonaws.com/facilities/facilityphoto/5d910083-f638-44cf-9f52-589c88039173.jpg',
        title: '1593 - Dallas Warehouse',
        borderColor: 'border-green-500',
        location: true,
        tenantLaborAllowed: true,
        minSqFt: 500,
        spaceAvailable: 50000,
        pricingStartsAt: '$1.05/ sq. ft',
        infoText: 'Pallet to Square Foot conversion based on standard 40"x48" pallet.'
      },
      {
        id: 5,
        imageUrl: 'https://warehouse-exchange-production.s3.amazonaws.com/facilities/facilityphoto/0ef6efcf-b039-4876-9d26-61fea23b2847.jpg',
        title: '1591 - Carrollton Warehouse',
        borderColor: 'border-red-500',
        location: true,
        tenantLaborAllowed: false,
        minSqFt: 500,
        spaceAvailable: 20000,
        pricingStartsAt: '$1.10/ sq. ft',
        infoText: 'Pallet to Square Foot conversion based on standard 40"x48" pallet.'
      },
      {
        id: 6,
        imageUrl: 'https://warehouse-exchange-production.s3.amazonaws.com/facilities/facilityphoto/4026838e-e01d-4895-8469-4d5fe8e7829f.png',
        title: '1447 - Grand Prairie Warehouse',
        borderColor: 'border-red-500',
        location: true,
        tenantLaborAllowed: false,
        minSqFt: 1000,
        spaceAvailable: 5000,
        pricingStartsAt: '$1.25/ sq. ft',
        infoText: 'Pallet to Square Foot conversion based on standard 40"x48" pallet.'
      },
      {
        id: 7,
        imageUrl: 'https://warehouse-exchange-production.s3.amazonaws.com/facilities/facilityphoto/2712285d-4601-4343-9f92-34c73a23fa29.jpg',
        title: '1553 - Graland Warehouse',
        borderColor: 'border-green-500',
        location: true,
        tenantLaborAllowed: true,
        minSqFt: 1500,
        spaceAvailable: 21485,
        pricingStartsAt: '$1.34/ sq. ft',
        infoText: 'Pallet to Square Foot conversion based on standard 40"x48" pallet.'
      },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div key={card.id} className={`w-full flex flex-col md:flex-row justify-center py-5 gap-7 ${index <= cardsData.length - 1 ? 'border-b border-zinc-900' : ''}`}>
          <div className='w-full md:w-1/3'>
            <img className='w-full bg-red-300 h-40' src={card.imageUrl} alt='Warehouse' />
          </div>
          <div className='w-full md:w-2/3 p-2'>
            <div className='text-xl font-bold text-[#0C3F91]'>{card.title}</div>
            <div className='flex items-center gap-2 px-4'>
              <p className='text-xs'>{card.location && 'Pallet, Carton, Unit'}</p>
              <div className={`w-2 h-2 border-4 ${card.borderColor} ${card.tenantLaborAllowed} rounded-full`}></div>
              <p className='text-xs'>{card.tenantLaborAllowed ? 'Tenant Labor is Allowed' : 'Tenant Labor is Not Allowed'}</p>
            </div>
            <div className='text-sm pt-4'><span>Min Sq. Ft. <strong>{card.minSqFt}</strong></span></div>
            <div className='w-full flex'>
              <div className='w-1/2 flex gap-1'>
                <div className='w-10 h-10 p-2'><img src='https://www.warehouseexchange.com/img/icons/space-boxes.svg' alt='Space Boxes'/></div>
                <div className='my-2'>
                  <p className='text-xs'>Space available</p>
                  <span className="text-sm font-semibold">{card.spaceAvailable}</span>
                </div>
              </div>
              <div className='w-1/2 flex gap-1'>
                <div className='w-10 h-10 p-2'><img src='https://www.warehouseexchange.com/img/icons/space-pricing.svg' alt='Space Pricing'/></div>
                <div className='my-2'>
                  <p className='text-xs'>Pricing starts at</p>
                  <span className="text-sm font-semibold">{card.pricingStartsAt}</span>
                </div>
                <div className='flex justify-center px-2 py-3 text-xs relative group'>
                  <FaCircleInfo className='cursor-pointer' />
                  <span className='absolute top-8 ml-2 bg-gray-100 px-2 py-1 text-gray-700 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    {card.infoText}
                  </span>
                </div>
              </div>
            </div>
            <div className='text-sm text-[#0D77F1]'>View Details</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
