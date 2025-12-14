import AnimeHomePage from "@/components/pages/anime-home";
import MangaHomePage from "@/components/pages/manga-home";
import PostPage from "@/components/pages/posts-page";
// import Player from "@/components/player";

export default function Home() {
  return (
    <>
      <div className="">
        {/*<MangaHomePage />*/}
        {/*<PostPage page={1} limit={50} />*/}
        {/*<Player />*/}
        <AnimeHomePage />
      </div>
    </>
  );
}
