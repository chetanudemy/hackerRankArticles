import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
  const [articlelist, setarticleList] = useState(articles.sort(compare));

  function compare(a, b) {
    if (a.upvotes < b.upvotes) {
      return 1;
    }
    if (a.upvotes > b.upvotes) {
      return -1;
    }
    return 0;
  }

  function dateCompare(a, b) {
    // console.log(new Date(a.date).getTime());
    if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
      return 1;
    }
    if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
      return -1;
    }
    return 0;
  }

  const upvotedHandler = () => {
    const newList = articlelist.sort(compare);
    setarticleList(newList);
  };

  const recentHandler = () => {
    const newList = articlelist.sort(dateCompare);
    setarticleList(newList);
  };

  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>
          Sort By
        </label>
        <button
          data-testid='most-upvoted-link'
          className='small'
          onClick={upvotedHandler}>
          Most Upvoted
        </button>
        <button
          data-testid='most-recent-link'
          className='small'
          onClick={recentHandler}>
          Most Recent
        </button>
      </div>
      <Articles articles={articlelist} />
    </div>
  );
}

export default App;
