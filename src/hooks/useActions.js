import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movies from '../redux/actions/movies';
import * as seats from '../redux/actions/seats';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators({ ...movies, ...seats }, dispatch),
    [dispatch],
  );
};

export default { useActions };
