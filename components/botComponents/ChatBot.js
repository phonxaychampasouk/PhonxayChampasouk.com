import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('./Bot'),
  { ssr: false },
);

function ChatBot() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
      <p>HOME PAGE is here!</p>
    </div>
  );
}

export default ChatBot;
