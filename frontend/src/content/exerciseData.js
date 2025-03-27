// Athlete object template
export const Athlete = {
    id: '',
    name: '',
    age: 0,
    height: '',
    weight: '',
    sport: '',
    achievements: [],
    streak: 0
  };
  
  export const Achievement = {
    id: '',
    title: '',
    date: '',
    description: ''
  };
  
  export const ExerciseDay = {
    date: '',
    count: 0
  };
  
  // Generate exercise data for a year with deterministic values to avoid hydration errors
  export const generateYearlyExerciseData = () => {
    const data = [];
    const now = new Date();
    const startDate = new Date(now);
    startDate.setFullYear(now.getFullYear() - 1);
  
    for (let d = new Date(startDate); d <= now; d.setDate(d.getDate() + 1)) {
      const dayOfYear = Math.floor((d - startDate) / (1000 * 60 * 60 * 24));
      const count = dayOfYear % 6; // Ensure deterministic exercise count between 0-5
      
      data.push({
        date: d.toISOString().split('T')[0],
        count
      });
    }
  
    return data;
  };
  
  // Mock athlete data
  export const mockAthlete = {
    id: 'athlete-001',
    name: 'Alex Johnson',
    age: 27,
    height: "6'2\"",
    weight: '185 lbs',
    sport: 'Track & Field',
    streak: 15,
    achievements: [
      {
        id: 'ach-001',
        title: 'National Championship Gold',
        date: '2023-08-15',
        description: 'Won gold medal in 400m hurdles at the National Championship'
      },
      {
        id: 'ach-002',
        title: 'European Circuit Record',
        date: '2023-05-22',
        description: 'Set a new personal best and circuit record in Berlin'
      },
      {
        id: 'ach-003',
        title: 'Training Camp Excellence Award',
        date: '2023-01-10',
        description: 'Recognized for outstanding dedication and improvement during winter training camp'
      },
      {
        id: 'ach-004',
        title: 'Regional Qualifier Champion',
        date: '2022-11-05',
        description: 'First place in regional qualifying event with season best time'
      },
      {
        id: 'ach-005',
        title: 'Sponsorship Deal',
        date: '2022-09-30',
        description: 'Signed major sponsorship deal with leading athletic brand'
      }
    ]
  };
  
  // Generate exercise data
  export const exerciseData = generateYearlyExerciseData();
  