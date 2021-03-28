import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onclick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="7FC15E"
          />
        </div>
      </div>
      {/*Posts */}
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Mark Lusala"
        description="This ia a test"
        message="How to start your poultry farm business I had been in poultry farm since 2011 till now, now I own 100,000 birds, we use automatic poultry equipment and chicken cage, following words are my experience from my farm, thanks. Poultry farming is the raising chickens, ducks, turkeys and geese for the purpose of farming meat or eggs for food. The most popular poultry equipment using in poultry farm now is chicken cage. Anyone can work on poultry business; the most important thing is that you are interested in starting and pay your time continuously. it doesn’t matter your educational or financial background; you can start at any level and grow as big as you want with time. One of the factors that makes poultry business ideal business is because chickens grows very fast, a chicken can be ready for the market within 28 weeks from birth. For example, someone may actually invest the loan and within 30 to 40 weeks, he may start paying back through the money realized from sells. Profit potential in poultry business 1. Chicken do breed quickly and in large numbers Average healthy Layer lays egg 7 eggs or at least 4 times in a week. Hatching time is 21 days. One year some Breeds can lay as much as 325 eggs, This means that technically a Layer is capable of producing another chicken twice in three days. For example, if you have 500 healthy layers of good breeds (such as California white) you will get 12,000 chicks within 40 days! 2. Chicken grows very fast, quick return The egg is hatched within 21 days, broiler is ready for market around 45 days, layer starts laying around 30 days, it means a farmer may start making his money after one and a half month after successfully setting up his farm and whatever returns he make could beyond doubled in a year based on this calculation. 3. Chicken meat or eggs has large market demand As research the farmers we currently have are not producing enough poultry and will not be enough even in the next ten years! 1) "
      />
    </div>
  );
}

export default Feed;
