import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onChangeFilter}
      />
    </Label>
  );
};
