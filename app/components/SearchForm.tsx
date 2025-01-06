import React from 'react';
import Form from 'next/form';
import { Search } from 'lucide-react';
import SearchFormReset from '../components/SearchFormReset ';

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action='/' scroll={false} className='search-form flex gap-2 p-4'>
      <div className='relative w-full sm:w-[400px]'>
        {/* search bar */}
        <input name='q' defaultValue={query} placeholder='Search...' className='border rounded px-3 py-2 w-full' />
        {/* btn */}
        <div className='absolute top-1/2 right-2 -translate-y-1/2 flex gap-2'>
          {query && <SearchFormReset />}
          <button type='submit'>
            <Search className='cursor-pointer hover:opacity-60' />
          </button>
        </div>
      </div>
    </Form>
  );
};

export default SearchForm;
