import { FlipCard } from '../shared/FlipCards/FlipCard';
import { Underline } from '../shared/SvgIcons';
export default function Features() {
  return (
    <div className='w-full h-auto bg-lavender py-[50px] flex flex-col justify-center gap-6 pt-20'>
      <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center flex-col'>
          <h3 className='font-thuast text-[30px]'>Features</h3>
          <Underline height={6} width={200} fill='black' />
        </div>
        <span>Elevate Your Game</span>
      </div>
      <div className='flex justify-center gap-6 flex-wrap'>
        <FlipCard
          height={300}
          width={300}
          titleFront='Performance'
          frontText='Hover Me'
          titleBack='Insights'
          backText='AI-powered analysis'
          gradientFront='from-lavender/70 to-transparent'
          gradientBack='from-transparent to-pastelYellow/80'
        />
        <FlipCard
          height={300}
          width={300}
          titleFront='Diet Plans'
          frontText='Nutrition Matters'
          titleBack='Personalized'
          backText='Tailored meal plans'
          gradientFront='from-red-400/20 to-transparent'
          gradientBack='from-transparent to-red-400/20'
        />
        <FlipCard
          height={300}
          width={300}
          titleFront='Diet Plans'
          frontText='Nutrition Matters'
          titleBack='Personalized'
          backText='Tailored meal plans'
          gradientFront='from-red-400/20 to-transparent'
          gradientBack='from-transparent to-red-400/20'
        />
        <FlipCard
          height={300}
          width={300}
          titleFront='Diet Plans'
          frontText='Nutrition Matters'
          titleBack='Personalized'
          backText='Tailored meal plans'
          gradientFront='from-red-400/20 to-transparent'
          gradientBack='from-transparent to-red-400/20'
        />
        <FlipCard
          height={300}
          width={300}
          titleFront='Diet Plans'
          frontText='Nutrition Matters'
          titleBack='Personalized'
          backText='Tailored meal plans'
          gradientFront='from-red-400/20 to-transparent'
          gradientBack='from-transparent to-red-400/20'
        />
      </div>
    </div>
  );
}
