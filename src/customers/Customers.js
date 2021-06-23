import React, {useEffect} from "react";
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {makeSelectCountList, makeSelectCustomersList, makeSelectError, makeSelectLoading} from "./selectors";
import {getCustomersAction} from "./actions";

const Customers = (props) => {

  useEffect(() => {
    props.getCustomersDispatch({
      lat:35.774,
      long: 51.418,
      page: 0,
      page_size: 10
    });
  }, []);

  return (
    <div>
      {props.customersList.map(customer => {
        return <div>{customer.data?.title}</div>
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  customersList: makeSelectCustomersList(),
  count: makeSelectCountList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCustomersDispatch: (payload) => dispatch(getCustomersAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Customers);
