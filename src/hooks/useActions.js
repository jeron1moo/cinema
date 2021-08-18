import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movies from '../redux/actions/movies';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators({ ...movies }, dispatch), [dispatch]);
};

export default { useActions };
