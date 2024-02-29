import { useState } from 'react';

import css from './MyAddresses.module.css'

import AddressCard from '../../../../Cards/AddressCard/AddressCard';
import AddAddressCard from '../../../../Cards/AddressCard/AddAddressCard';
import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";
const MyAddresses = ({hashId}) => {

    let [isData, setIsData] = useState(true)

    let data = [
        {
            id: 1,
            title: "Hostel",
            address: "Dilshuk Nagar, Rajasthan",
        },
        {
            id:2,
            title: "Hostel2",
            address: "Durgapur, Jhunjhunu, Rajasthan",
        }
    ]

  return (<div className={css.outerDiv}>
  {isData ? (
    <>
    <AddAddressCard/>
      {data?.map(val => {
          return <AddressCard title={val?.title} address={val?.address} key={val?.id} />
      }) }
    </>
  ) : (
    <UserProfileNoData hashId={hashId} />
  )}
</div>);
}

export default MyAddresses  