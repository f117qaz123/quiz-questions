import React from "react";

const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 }
];

const RoomsList = ({rooms}) => {
  const roomsList = rooms.map(({ room_type, vacant_rooms, price }) => {
    return (
      <li>
        {room_type},  {vacant_rooms},  ${price}
      </li>
    )
  });

  return (
    <ol>
      {roomsList}
    </ol>
  )
};

export default RoomsList;
