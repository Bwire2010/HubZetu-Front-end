import React, { useEffect, useState } from "react";
import HubItem from "./HubItem";

export default function Hubs() {
  const [hubs, setHubs] = useState([]);

  useEffect(() => {
    fetch("/hubs")
      .then((r) => r.json())
      .then(setHubs);
  }, []);


  function handleDeleteHub(deletedHub) {
    setHubs((hubs) => hubs.filter((hub) => hub.id !== deletedHub.id));
  }

  return (
    <div className="hubs">
      {hubs.map((hub) => {
        return <HubItem key={hub.id} hub={hub} onDeleteHub={handleDeleteHub} />;
      })}
    </div>
  );
}
