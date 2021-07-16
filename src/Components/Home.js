import PictureCard from "./PictureCard";

const Home = ({ feed, handleLikeUpdate }) => {
  return (
    <div className="feedList" id="feedList">
      {feed.map((post) => {
        return (
          <PictureCard
            key={post.iduser_posts}
            post={post}
            handleLikeUpdate={handleLikeUpdate}
          />
        );
      })}
    </div>
  );
};

export default Home;
