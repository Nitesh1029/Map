'use client'
import React, { useState } from 'react';

interface CardItem {
  id: number;
  title: string;
  imageUrl: string;
}

const cardData: CardItem[] = [
  { id: 1, title: 'Resort', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIidi5hmuphq0tONK1uw4MSWJspGHFDsON8g&s' },
  { id: 2, title: 'Resort', imageUrl: 'https://img.lovepik.com/background/20211021/large/lovepik-irregular-background-of-black-gold-image_400111426.jpg' },
  { id: 3, title: 'Resort', imageUrl: 'https://png.pngtree.com/background/20210711/original/pngtree-premium-black-golden-year-background-design-picture-image_1144224.jpg' },
  { id: 4, title: 'Resort', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIidi5hmuphq0tONK1uw4MSWJspGHFDsON8g&s' },
];

function Card() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handlePanelClick = (id: number) => {
    setSelectedItems(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(itemId => itemId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const handleCheckboxChange = (id: number) => {
    handlePanelClick(id);
  };

  const handleSelectAll = () => {
    setSelectAll(prevState => !prevState);
    if (!selectAll) {
      const allIds = cardData.map(item => item.id);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <div className='w-full flex flex-col gap-5'>
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <label htmlFor="selectAll">Select All</label>
      </div>
      {cardData.map((item) => (
        <div key={item.id} className={`flex gap-5 items-center cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-300 ${selectedItems.includes(item.id) ? 'border-cyan-500' : 'border-grey-500'}`}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
            className="opacity-0 absolute"
          />
          <div
            className="w-full h-30 p-5 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
            }}
            onClick={() => handlePanelClick(item.id)}
          >
            <div className='text-sm items-left md:text-lg font-bold text-white absolute bottom-3'>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;