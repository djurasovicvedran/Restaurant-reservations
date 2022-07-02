import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div
        className="reservation-card-container"
        onClick={() => {
          dispatch(removeReservation(index));
          dispatch(
            addCustomer({
              id: uuid(),
              name,
              food: [],
            })
          );
        }}
      >
        {name}
      </div>
    </React.Fragment>
  );
};

export default ReservationCard;
