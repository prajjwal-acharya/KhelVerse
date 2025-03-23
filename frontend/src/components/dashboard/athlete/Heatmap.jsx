'use client';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip } from 'react-tooltip';
import { format } from 'date-fns';

const today = new Date();
const startDate = new Date();
startDate.setFullYear(today.getFullYear() - 1);

const generateSampleData = () => {
  const data = [];
  for (let i = 0; i < 365; i++) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    const count = Math.random() > 0.7 ? Math.floor(Math.random() * 6) : 0;
    data.push({ date: format(date, 'yyyy-MM-dd'), count });
  }
  return data;
};

const taskData = generateSampleData();

const Heatmap = () => {
  const classForValue = (value) => {
    if (!value || value.count === 0) return 'color-empty';
    return `color-scale-${Math.min(value.count, 5)}`;
  };

  return (
    <div className='w-full flex items-center justify-center min-h-[150px] h-auto py-[10px] '>
      <div className='p-4 w-full h-full shadow-md rounded-lg bg-black'>
        {/* <h2 className='text-center font-bold mb-3 text-white'>Task Completion Heatmap</h2> */}
        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={taskData}
          classForValue={classForValue}
          tooltipDataAttrs={(value) => ({
            'data-tooltip-id': 'task-tooltip',
            'data-tooltip-content': `${value.date}: ${value.count} tasks completed`,
          })}
          gutterSize={5}
          showMonthLabels={true}
          showWeekdayLabels={false}
          horizontal={true}
        />
        <Tooltip id='task-tooltip' />
      </div>
    </div>
  );
};

export default Heatmap;
