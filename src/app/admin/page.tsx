import SubscribersList from '../components/SubscribersList';

export default function AdminPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: '#9370DB' }}>
          Da Grape Vine Admin
        </h1>
        
        <SubscribersList />
      </div>
    </main>
  );
} 