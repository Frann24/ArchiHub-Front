import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import infoTypePost from "../../../../api/projectTypeData";
import Select from "react-select";
import { filterTypePost } from "../../../../redux/slices/post/ordenAndFilterActions";
export default function FilterType() {
  const [filterType, setFilterType] = useState("default");
  const { allPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterTypePost(allPosts, filterType.value));
  }, [filterType]);

  const onChangeSelect = (value) => {
    setFilterType(value)
  }

  const options = infoTypePost?.map((e) => {
    return { value: e.value, label: e.name };
  });
  return (
    <div>
      <Select
        onChange={onChangeSelect}
        options={options}
        value={filterType}
      />
      {/* <select
        className=""
        defaultValue="default"
        name="filterType"
        id="filterType"
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="default">Todos</option>
        {infoTypePost.map((e, index) => {
          return (
            <option key={index} value={e.value}>
              {e.name}
            </option>
          );
        })}
      </select> */}
    </div>
  );
}
