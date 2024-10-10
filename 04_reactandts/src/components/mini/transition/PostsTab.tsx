import { ReactElement, memo } from "react";

const PostsTab = memo(() => {
  let postsContent: ReactElement[] = [];
  for (let i = 0; i < 500; i++) {
    postsContent.push(<SlowComponent index={i} />);
  }
  return <ul className="flex justify-center items-center">{postsContent}</ul>;
});
export default PostsTab;

function SlowComponent({ index }: { index: number }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}
  return <li>post no:{index}</li>;
}
