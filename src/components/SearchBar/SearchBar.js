/* eslint-disable no-cond-assign, no-plusplus, prettier/prettier */
import React, { Component } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchBar.css';

import { addItemToLS, fetchAndParseLSItem } from '../../core/utils';
// TODO: search suggestions shoulld not show more than 5 results
class SearchBar extends Component {
  state = {
    expand: false,
    searchResults: [1, 2, 3, 4],
    selectedKey: -1,
  };

  componentDidMount() {
    this.recentSearches = fetchAndParseLSItem('recentSearches') || [];
    this.searchContentLength =
      this.recentSearches.length + this.state.searchResults.length;
  }

  setRecentSearches(query) {
    /* Maximum 3 queries can be saved */
    const { recentSearches } = this;
    const queryIndex = recentSearches.indexOf(query);
    /* If query is already present in recentSearches remove it */
    if (queryIndex !== -1) {
      recentSearches.splice(queryIndex, 1);
    }
    /* If query is not present in recentSearches
       and recentSearches length is >= 3 then remove the last element */
    if (recentSearches.length >= 3 && queryIndex === -1) {
      recentSearches.pop();
    }
    recentSearches.unshift(query);
    /* Save recentSearches in localstorage */
    addItemToLS('recentSearches', JSON.stringify(recentSearches));
  }

  getSearchString() {
    const { selectedKey, searchResults } = this.state;
    let searchText = '';
    if (selectedKey >= 0 && selectedKey < searchResults.length) {
      // in search suggestions
      searchText = searchResults[selectedKey];
    } else if (
      selectedKey >= searchResults.length &&
      selectedKey < searchResults.length + this.recentSearches.length
    ) {
      // in recent searches
      searchText = this.recentSearches[selectedKey - searchResults.length];
    }
    this.search.value = searchText;
    return searchText;
  }

  cleanUp = () => {
    this.setState({ expand: false, selectedKey: -1 });
  }

  handleChange(e) {
    let searchString = e.target.value.trim();
    // get key pressed by user
    const key = e.which || e.keyCode;
    let { selectedKey } = this.state;
    switch (key) {
      case 38: // up arrow
        this.setState({
          selectedKey: selectedKey > 0 ? (--selectedKey) :
            this.searchContentLength + Math.max(--selectedKey, -1) % this.searchContentLength,
        });
        break;
      case 40: // down arrow
        this.setState({
          selectedKey: selectedKey >= -1 ? (++selectedKey) % this.searchContentLength :
            this.searchContentLength + (++selectedKey),
        });
        break;
      case 13: // enter key
        if (searchString !== '' || selectedKey > -1) {
          if (selectedKey > -1 && (searchString = this.getSearchString()) === '') {
            // if the method getSearchString returns empty string
            this.setState({ expand: false });
            return;
          }
          // TODO: retrieve search results
          // user pressed enter after selecting a value in drop down
          /* on enter click save query in localStorage */
          this.setRecentSearches(searchString);
        }
        this.cleanUp();
        break;
      default:
        // user typed something into search box
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
          /* TODO: fetch search results and update this.searchContentLength */
        }, 200);
    }
  }

  render() {
    const { expand, searchResults, selectedKey } = this.state;
    return (
      <div className={s.searchBar}>
        <i className="icon-search" />
        <input
          ref={el => {
            this.search = el;
          }}
          onClick={() => this.setState({ expand: true })}
          onBlur={() => this.setState({ expand: false })}
          onKeyUp={e => this.handleChange(e)}
          autoComplete="off"
          type="search"
          placeholder="search"
        />
        {expand && (
          <div className={s.suggestedSearch}>
            {searchResults ? (
              <ul>
                {searchResults.map((data, index) => (
                  <li
                    className={cx(s.searchItem, {
                      [s.active]: selectedKey === index,
                    })}
                    key={index}
                  >
                    <span className={s.searchSuggestion}>{data}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {this.recentSearches.length ? (
              <ul>
                <div className={s.popProd}>Recent Searches</div>
                {this.recentSearches.map((data, index) => (
                  <li
                    className={cx(s.searchItem, {
                      [s.active]: selectedKey === index + searchResults.length,
                    })}
                    key={index}
                  >
                    <span>{data}</span>
                    <i className="icon-arrow-up-left2" />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(SearchBar);
