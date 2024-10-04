import React from "react";
import Title from "../../ui/Title";
import { events } from "../../constants";
import Item from "./Item";

const Event = () => {
  return (
    <div className="ng-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Events</Title>
      {events.map((event, index) => (
        <Item event={event} index={index} />
      ))}
    </div>
  );
};

export default Event;
