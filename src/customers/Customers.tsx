import {useEffect} from "react";
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {makeSelectCountList, makeSelectCustomersList, makeSelectError, makeSelectLoading} from "./selectors";
import {getCustomersAction} from "./actions";
import Item from "./Item";
import {Props} from "./interface";
import {getQueue, getValueWithType} from "../utils/helper";

const Customers = (props: Props) => {

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    getValueWithType(225);
    getValueWithType('Hello World');
    getQueue();
  }, [])

  const fetchCustomers = () => {
    props.getCustomersDispatch({
      lat:35.774,
      long: 51.418,
      page: 0,
      page_size: 10
    });
  }

  return (
    <div>
      <h1> Customers :</h1>
      {props.loading && <div>... Loading</div>}
      <div>
        {!props.loading && props.customersList && props.customersList?.map((customer, index) => {
          return <Item key={index} data={customer.data} />
        })}
      </div>
      <div>
        <button onClick={fetchCustomers}>Fetch Customers</button>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  customersList: makeSelectCustomersList(),
  count: makeSelectCountList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch: any) {
  return {
    getCustomersDispatch: (payload: object) => dispatch(getCustomersAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Customers);
