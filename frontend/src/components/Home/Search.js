import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import agent from "../../agent";

const connectDispatchToProps = (dispatch) => ({
  onChangeFilter: (pager, payload) =>
    dispatch({ type: "APPLY_TITLE_FILTER", pager, payload }),
});

const Search = ({ onChangeFilter }) => {
  const [filter, setNewFilter] = useState("");

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (filter.length < 3) {
        onChangeFilter(
          (page) => agent.Items.byTitle("", page),
          agent.Items.byTitle("")
        );
      } else {
        onChangeFilter(
          (page) => agent.Items.byTitle(filter, page),
          agent.Items.byTitle(filter)
        );
      }
    }
    return () => {
      isMounted = false;
    };
  }, [filter, onChangeFilter]);

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <section id="get-part">
          <span className="text-inplace">A place to get</span>
          <input
            onChange={({ target }) => setNewFilter(target.value)}
            value={filter}
            type="text"
            name="title"
            id="search-box"
            placeholder="What is that you truly desire?"
          />
          <span className="text-inplace"> the cool stuff.</span>
        </section>
      </form>
    </div>
  );
};

export default connect(null, connectDispatchToProps)(Search);
