import { ReactElement, Suspense, memo } from "react";
import PostSkeleton from "./PostSkeleton";

const MusicPage = memo(() => {
  let postsContent: ReactElement[] = [];
  for (let i = 0; i < 500; i++) {
    postsContent.push(<SlowComponent index={i} />);
  }
  return (
    <div>
      <Suspense fallback=<PostSkeleton />>
        <ul className="flex flex-1 w-[300px] h-[300px] justify-center items-center">
          {postsContent}
        </ul>
      </Suspense>
    </div>
  );
});
export default MusicPage;

function SlowComponent({ index }: { index: number }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}
  return <li>post no:{index}</li>;
}
