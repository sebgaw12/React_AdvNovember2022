import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const Search = () => {
    console.log(useLocation())
    const query = new URLSearchParams(useLocation().search)
    const term = query.get('q')

const Items = [
    'Lorem Ipsum',
    'Ipsum Dipsum',
    'Foo Bar',
    'A little black cat',
    'A lazy fox',
    'A jumping dog'
  ];

  const doSearch = (term) => {
    console.log(Items)
    if(!term)
        return Items
        
    return Items.filter(item => item.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1)

  }

  const returned = doSearch(term);

    return ( 
        <div>
            <h1>Search</h1>
            <ul>
                {returned.map( t=> (<li key={t}>{t}</li>))}
            </ul>
        </div>
    )
}

export default Search;
