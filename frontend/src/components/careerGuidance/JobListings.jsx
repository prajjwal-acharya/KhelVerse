
import React from 'react';
import { MapPin, Clock, DollarSign, Filter, Bookmark, Briefcase } from 'lucide-react';

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: 'Senior UX Designer',
    company: 'Design Innovate',
    location: 'San Francisco, CA',
    salary: '$120K - $150K',
    type: 'Full-time',
    logo: '🎨',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    salary: '$95K - $120K',
    type: 'Full-time',
    logo: '💻',
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'New York, NY',
    salary: '$130K - $160K',
    type: 'Full-time',
    logo: '📱',
    posted: '3 days ago',
  },
];

const JobListings = () => {
  return (
    <div className="animate-slide-in-up animation-delay-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="section-heading">Job Listings</h2>
        <button className="button-outline flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="job-card animate-scale-in" style={{ animationDelay: `${job.id * 100}ms` }}>
            <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
              <div className="flex gap-4 items-start md:items-center flex-1">
                <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center text-xl">
                  <span>{job.logo}</span>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex items-center text-xs text-muted-foreground">
                      <DollarSign className="h-3 w-3 mr-1" />
                      <span>{job.salary}</span>
                    </div>
                    
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Briefcase className="h-3 w-3 mr-1" />
                      <span>{job.type}</span>
                    </div>
                    
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 w-full md:w-auto">
                <button className="button-primary flex-1 md:flex-none">
                  Apply Now
                </button>
                
                <button className="button-outline p-0 w-10 flex items-center justify-center">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <button className="button-outline">
          View More Jobs
        </button>
      </div>
    </div>
  );
};

export default JobListings;
