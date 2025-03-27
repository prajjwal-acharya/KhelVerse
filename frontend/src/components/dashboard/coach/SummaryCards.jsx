'use client';

import React from 'react';
import { Users, TrendingUp, CalendarClock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const summaryData = [
  {
    title: 'Total Athletes',
    value: '28',
    change: '+3 this month',
    positive: true,
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Avg. Performance',
    value: '82%',
    change: '+5% since last month',
    positive: true,
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Sessions This Week',
    value: '12',
    change: '3 more than last week',
    positive: true,
    icon: CalendarClock,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Top Performers',
    value: '6',
    change: 'Above 90% score',
    positive: true,
    icon: Award,
    color: 'from-apts-purple to-violet-700',
  },
];

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {summaryData.map((item, index) => (
        <motion.div
          key={item.title}
          className="glass-card p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(155, 135, 245, 0.2)' }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-apts-white/70 text-sm">{item.title}</h3>
              <p className="text-apts-white text-2xl font-bold mt-1">{item.value}</p>
              <div className={`flex items-center mt-1 text-xs ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                <span>{item.positive ? '↑' : '↓'}</span>
                <span className="ml-1">{item.change}</span>
              </div>
            </div>
            
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
              <item.icon size={18} className="text-white" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SummaryCards;
