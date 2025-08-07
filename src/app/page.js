// import HelloWorld from '../components/HelloWorld';

// export default function Home() {
//   return (
//     <div>
//       <HelloWorld />
//     </div>
//   );
// }

import GreetingCard from '@/components/GreetingCard';

export default function Home() {
  return (
    <div>
      <GreetingCard name="Alice" />
      <GreetingCard name="Bob" />
      <GreetingCard name="Charlie" />
    </div>
  );
}
