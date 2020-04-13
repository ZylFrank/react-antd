import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { countAdd, countMinus } from '../../store/actions/count';

import './styles.css';

function IndexPage(props) {
  const { count, dispatch } = props;
  const addCount = () => {
    dispatch(countAdd());
  };
  const minusCount = () => {
    dispatch(countMinus());
  };

  return (
    <div>
      <div>current counts is: {count}</div>
      <Button type="primary" onClick={() => addCount()}>
        Add
      </Button>
      <Button type="primary" onClick={() => minusCount()}>
        Minus
      </Button>
    </div>
  );
}

export default connect((state) => ({
  count: state.countReducer,
}))(IndexPage);
