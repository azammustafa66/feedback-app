import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='grid grid-cols-1 lg:gap-3 md:grid-cols-3 lg:mr-8 lg:grid-cols-1'>
      <Card className='custom-gradient h-44 rounded-xl p-1 md:w-64 text-start lg:h-[137px]'>
        <h1 className='text-xl font-bold text-white'>User's name here</h1>
        <p className='mt-2 text-lg font-medium text-white opacity-75'>Feedback board</p>
      </Card>

      <Card className='hidden h-44 rounded-lg shadow-lg md:block md:w-64 lg:h-40'>
        {/* TODO: Map all the categories to a pill */}
      </Card>

      <Card className='h-44 rounded-lg p-3 shadow-lg md:w-64 lg:h-auto'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-lg font-bold text-slate-700'>Roadmap</h2>
          <Link to='#' className='text-sm text-indigo-500 hover:underline'>
            View
          </Link>
        </div>
        <Divider />

        <div className='space-y-4'>
          {[
            { label: 'Planned', color: 'orange', count: 2 },
            { label: 'In-Progress', color: 'fuchsia', count: 2 },
            { label: 'Live', color: 'blue', count: 2 }
          ].map(({ label, color, count }) => (
            <div key={label} className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <i
                  className={`pi pi-circle-fill text-${color}-400`}
                  style={{ fontSize: '0.75rem' }}
                />
                <p className='text-md font-medium text-slate-600'>{label}</p>
              </div>
              <p className='text-md font-semibold text-slate-700'>{count}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
