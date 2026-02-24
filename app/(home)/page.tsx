import Greeting from "@/components/startpage/Greeting";
import SearchBar from "@/components/startpage/SearchBar";
import Bookmarks from "@/components/startpage/Bookmarks";
import CurrentTime from "@/components/time/CurrentTime";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 animate-page-in">
        <div className="flex flex-col items-center gap-1 opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]">
          <Greeting />
          <div className="flex items-center text-paradise-200 mt-1 gap-2">
            <CurrentTime className="text-xl" />
          </div>
        </div>

        <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.25s_forwards] w-full max-w-2xl">
          <SearchBar />
        </div>

        <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards] w-full">
          <Bookmarks />
        </div>
      </div>
    </>
  );
}