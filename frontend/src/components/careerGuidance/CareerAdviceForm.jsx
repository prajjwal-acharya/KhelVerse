'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  sport: z.string().min(1, "Please enter your sport"),
  level: z.string().min(1, "Please select your competition level"),
  experience: z.coerce.number().min(0, "Enter a valid experience (years)"),
  goal: z.string().min(1, "Please enter your career goal"),
  education_interest: z.string().min(1, "Please enter your education interest"),
  skills: z.string().min(1, "Please enter your skills"),
});

const CareerAdviceForm = ({ onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sport: "",
      level: "",
      experience: "",
      goal: "",
      education_interest: "",
      skills: "",
    },
  });

  return (
    <div className="animate-slide-in-up">
      <div className="mb-6">
        <span className="inline-block text-xs font-medium px-3 py-1 bg-accent/20 text-accent-foreground rounded-full mb-2">
          AI Powered
        </span>
        <h2 className="section-heading">Your Career Path Advisor</h2>
      </div>

      <Card className="shadow-card">
        <CardHeader className="bg-gradient-to-r from-violet to-lavender text-white">
          <CardTitle className="text-xl font-display flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Sports Career Questionnaire
          </CardTitle>
          <CardDescription className="text-white/80">
            Answer these questions and our AI will recommend optimal career paths for you.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Sport & Experience */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Sport & Experience</h3>

                <FormField
                  control={form.control}
                  name="sport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What sport do you play?</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Basketball, Swimming, Tennis" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What is your current competition level?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your competition level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">State</SelectItem>
                          <SelectItem value="2">National</SelectItem>
                          <SelectItem value="3">International</SelectItem>
                          <SelectItem value="0">Recreational</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How many years have you been in this sport?</FormLabel>
                      <FormControl>
                        <Input type="number" min="0" max="50" placeholder="e.g. 5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Career Goals */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Career Goals</h3>

                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What do you want to do next?</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Become a professional athlete, Coach, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Education Interest */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Education Interest</h3>

                <FormField
                  control={form.control}
                  name="education_interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What area of education interests you?</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. B.Tech in Sports Science, MBA in Sports Management" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Skills</h3>

                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Do you have any certifications or skills related to sports?</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Judo, Yoga Certification, Personal Training, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full bg-lavender text-black hover:bg-black hover:text-lavender transition-all duration-500">
                Generate Career Advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerAdviceForm;
