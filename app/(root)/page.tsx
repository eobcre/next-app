import React from 'react';
import SearchForm from '../components/SearchForm';

const Home = async ({ searchParams }: { searchParams: Promise<{ q?: string }> }) => {
  const query = (await searchParams).q;

  return (
    <div>
      <SearchForm query={query} />
    </div>
  );
};

export default Home;
